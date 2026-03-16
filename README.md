# CRM Application

A modern, full-featured Customer Relationship Management (CRM) platform built with React, TypeScript, and cutting-edge web technologies. Designed for businesses to manage contacts, companies, deals, tasks, teams, and workflows efficiently.

## ✨ Features

- **Contact Management** - Organize and track all your customer contacts
- **Company Profiles** - Manage company information and relationships
- **Deal Pipeline** - Visualize and manage your sales pipeline with Kanban views, tables, and graphs
- **Task Management** - Create and track tasks with due dates and priorities
- **Team Collaboration** - Manage team members and their roles
- **Workflow Automation** - Set up automated workflows for repetitive tasks
- **Analytics Dashboard** - Gain insights into your business metrics
- **AI Assistant** - Get intelligent recommendations and support
- **Authentication** - Secure login and signup with user onboarding
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Dark Mode** - Built-in theme switching support

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Management**: TanStack React Query
- **Data Visualization**: Recharts
- **Drag & Drop**: dnd-kit
- **Tables**: TanStack React Table
- **Icons**: Lucide React
- **Animations**: Motion
- **Theme Management**: next-themes
- **Notifications**: Sonner
- **CSV Export**: PapaParse & XLSX

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd showcase
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (if needed):
```bash
cp .env.example .env.local
```

## 💻 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── companies/      # Company management components
│   ├── contacts/       # Contact management components
│   └── deals/          # Deal pipeline components
├── pages/              # Page components for routes
│   ├── Contacts.tsx
│   ├── Deals.tsx
│   ├── Companies.tsx
│   ├── Tasks.tsx
│   ├── Teams.tsx
│   ├── Workflows.tsx
│   ├── Analytics.tsx
│   └── Login.tsx
├── context/            # React Context for auth & state
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and API calls
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🔐 Authentication

The application includes a complete authentication system with:
- User login and signup
- Protected routes
- User onboarding flow
- Session management via AuthContext

## 🎨 UI Components

All UI components are built with shadcn/ui and customized with Tailwind CSS. To add new components:

```bash
npx shadcn@latest add <component-name>
```

Available components include buttons, dialogs, tables, cards, charts, and more.

## 📊 Data Visualization

The application uses Recharts for creating interactive charts and graphs. Deploy visualizations across the Analytics dashboard and Deal views.

## 🎯 Key Pages

- **Dashboard** - Overview of key metrics and activities
- **Contacts** - View, create, and manage contacts
- **Companies** - Manage company profiles and relationships
- **Deals** - Track sales pipeline with multiple visualization options
- **Tasks** - Create and manage team tasks
- **Teams** - Manage team members and roles
- **Workflows** - Configure automated workflows
- **Analytics** - View business metrics and insights

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For support, please open an issue on the repository or contact the development team.

---

**Built with ❤️ for modern CRM management**
