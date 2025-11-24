# Professional React Full-Stack Application

A modern, production-ready React application built with TypeScript, Tailwind CSS, and Redux Toolkit. This project demonstrates professional full-stack development practices with enterprise-grade tooling.

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Redux Toolkit** - Official, opinionated Redux toolset for efficient state management
- **Vite** - Next-generation frontend build tool with lightning-fast HMR
- **ESLint** - Linting and code quality enforcement

## 📋 Features

- ✅ Full TypeScript support with strict type checking
- ✅ Redux Toolkit for predictable state management
- ✅ Tailwind CSS for modern, responsive UI design
- ✅ Hot Module Replacement (HMR) for instant feedback
- ✅ ESLint configured with React and TypeScript best practices
- ✅ Strongly-typed Redux hooks
- ✅ Professional project structure

## 🏗️ Project Structure

```
src/
├── store/
│   ├── slices/          # Redux slices
│   │   └── counterSlice.ts
│   ├── hooks.ts         # Typed Redux hooks
│   └── index.ts         # Store configuration
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind directives
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Development

The application includes a fully functional counter example demonstrating:

- **TypeScript**: Strongly-typed components and Redux store
- **Tailwind CSS**: Modern, responsive UI with utility classes
- **Redux Toolkit**: Centralized state management with slices and typed hooks

### Key Files

- `src/store/index.ts` - Redux store configuration
- `src/store/slices/counterSlice.ts` - Example Redux slice with actions and reducers
- `src/store/hooks.ts` - Typed `useAppDispatch` and `useAppSelector` hooks
- `src/App.tsx` - Main application component with Redux integration

## 📝 Best Practices

This project follows industry best practices:

1. **TypeScript strict mode** for maximum type safety
2. **Redux Toolkit** for simplified Redux patterns
3. **Typed hooks** for Redux (`useAppDispatch`, `useAppSelector`)
4. **Tailwind CSS** for consistent, maintainable styling
5. **Component-based architecture** for reusability
6. **ESLint** for code quality and consistency

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript compiler configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite build tool configuration
- `eslint.config.js` - ESLint rules and plugins

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vite.dev/)
