import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import Landing from "./Landing.tsx"
import CrmApp from "./CrmApp.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

function Root() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <ThemeProvider>
      {showDemo ? (
        <CrmApp />
      ) : (
        <Landing onLaunch={() => setShowDemo(true)} />
      )}
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
