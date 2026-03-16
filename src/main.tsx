import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import Landing from "./Landing.tsx"
import CrmApp from "./CrmApp.tsx"
import { ThemeProvider, useTheme } from "@/components/theme-provider.tsx"

function RootContent() {
  const [showDemo, setShowDemo] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      {showDemo ? (
        <CrmApp />
      ) : (
        <Landing 
          isDark={isDark}
          onLaunch={() => setShowDemo(true)}
          onThemeToggle={handleThemeToggle}
        />
      )}
    </>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
