# Next.js Production Starter Template

A reusable, scalable Next.js 14+ frontend foundation.

Start building features on day one. Skip boilerplate.

Built with TypeScript, Tailwind, React Query, auth scaffolding, forms, and clean architecture for real production apps.

---

## Why this template

Most projects repeat the same setup work.

* routing
* auth
* API client
* forms
* shared UI
* state
* testing
* config

This template ships everything ready.

Clone. Connect backend. Ship faster.

---

## Stack

* Next.js 14+ App Router
* TypeScript strict
* Tailwind CSS
* TanStack React Query
* Zustand
* React Hook Form
* Zod
* Axios
* next-intl
* Jest + Testing Library
* ESLint + Prettier + Husky

---

## Features

### Architecture

* Feature based modular structure
* Functional components only
* Server components by default
* Strong typing
* Clean separation of UI, logic, and services
* Absolute imports from root

### Layout system

* RootLayout
* Navbar
* Sidebar
* Header
* Footer
* Container
* Responsive grid
* Route based layouts

### Routing

* Central route config
* Typed paths
* Breadcrumb generator
* Protected routes
* Role based access
* Middleware guards

### Authentication

* Auth provider
* Login and logout flow
* Token persistence
* Refresh logic
* Role permissions

### API layer

* Central axios client
* Interceptors
* Global error handling
* Retry logic
* Request cancellation
* React Query caching
* Optimistic updates

### Forms

* React Hook Form
* Zod validation
* Reusable Form and Field components
* Error messages
* Loading states
* File uploads

### UI components

* Button variants
* Inputs
* Select
* Checkbox
* Radio
* Switch
* Modal
* Drawer
* Toast
* Tooltip
* Card
* Table
* Pagination
* Tabs
* Loader
* Skeleton
* Empty state
* Error state

### Design system

* Tailwind tokens
* Spacing scale
* Typography scale
* Color tokens
* Dark mode
* CVA variants

### State

* Context for global config
* Zustand store example
* No prop drilling

### Performance

* Code splitting
* Lazy loading
* Dynamic imports
* Suspense boundaries
* Image optimization

### Accessibility

* Keyboard navigation
* ARIA compliance
* Focus management
* Semantic HTML

### SEO

* Metadata helpers
* OpenGraph defaults
* Sitemap
* Robots file

### Internationalization

* next-intl
* Locale switcher
* Translation files

### Developer experience

* ESLint
* Prettier
* Husky pre commit hooks
* lint staged
* Path aliases
* Env validation
* Example pages

### Testing

* Jest
* React Testing Library
* Example tests

### Deployment ready

* Dockerfile
* GitHub Actions CI
* Production build config

---

## Project structure

Root level. No src folder.

```
app
components
  layout
  shared
  ui
features
hooks
services
lib
store
providers
utils
types
styles
config
constants
public
tests
```

---

## Getting started

### 1. Clone

```
git clone <your-repo-url>
cd next-template
```

### 2. Install

```
npm install
```

### 3. Setup env

Create

```
.env.local
```

Example

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Run

```
npm run dev
```

Open

```
http://localhost:3000
```

---

## Scripts

```
npm run dev
npm run build
npm run start
npm run lint
npm run test
```

---

## Example pages included

* Landing page
* Dashboard layout
* Auth flow
* CRUD page with API integration
* Form example
* Table with pagination and filters

Use these as references when building new features.

---

## How to reuse for new projects

### Option 1

```
git clone <repo>
```

### Option 2

```
npx degit yourname/next-template my-app
```

### Option 3

Click GitHub "Use this template".

---

## How to add features

### Add new feature

Create

```
features/feature-name
```

Keep UI, hooks, and services inside the feature folder.

### Add API

Create service inside

```
services/
```

Use shared API client.

### Add shared component

Place inside

```
components/ui
```

### Add page

Create route inside

```
app/
```

---

## Best practices enforced

* Composition over inheritance
* Small reusable components
* Central API layer
* Typed everywhere
* Reusable hooks
* Mobile first
* Minimal global state

---

## Use cases

Good for

* SaaS products
* Admin dashboards
* Internal tools
* Client projects
* Multi page apps

---

## License

MIT

---

If you want, next I can generate:

* ready folder tree with example files
* base boilerplate code
* or a GitHub repo scaffold

Tell me which.
