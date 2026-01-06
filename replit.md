# Adima Technologies Website

## Overview

This is a corporate website for Adima Technologies Pvt. Ltd., a product-based startup incubated at T-Hub, Hyderabad. The site showcases their portfolio of products spanning social media, matrimonial services, e-commerce, classifieds, and electric mobility. It features a contact form for inquiries that stores submissions in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Development Server**: Vite middleware integration for seamless dev experience
- **Production Build**: esbuild bundles server code, Vite builds client

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Current Storage**: In-memory storage (`MemStorage` class) - ready to swap for PostgreSQL
- **Database Migrations**: Drizzle Kit with `db:push` command

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API endpoint definitions with input/output types

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components
    pages/        # Route pages (Home, Products, About, Contact)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Data persistence layer
shared/           # Shared types and schemas
```

## External Dependencies

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **Drizzle ORM**: Database toolkit for TypeScript
- **connect-pg-simple**: PostgreSQL session store (available but not yet configured)

### UI/Animation Libraries
- **Radix UI**: Headless component primitives (dialogs, menus, forms)
- **Framer Motion**: Animation library
- **react-intersection-observer**: Scroll-triggered animations
- **Lucide React**: Icon library

### Form & Validation
- **Zod**: Schema validation
- **React Hook Form**: Form state management
- **drizzle-zod**: Generates Zod schemas from Drizzle tables

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development