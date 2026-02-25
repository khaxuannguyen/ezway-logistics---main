# Ezway Logistics - AI Coding Guidelines

## Project Overview

Ezway Logistics is a React TypeScript SPA for a Vietnamese logistics company, featuring package tracking, services, and contact pages. Uses Vite for building, Tailwind CSS for styling, and a Node.js proxy server for scraping tracking data from ksnpost.com.

## Architecture

- **Frontend**: React 18 + TypeScript + Vite, deployed as static site
- **Routing**: HashRouter (for static hosting compatibility)
- **Styling**: Tailwind CSS with custom brand colors (brand-navy, brand-blue, accent teal)
- **Backend**: Express proxy server (`server/`) for CORS-enabled tracking API
- **Data Flow**: Frontend → Proxy Server → Web scraping ksnpost.com → JSON response

## Key Components & Patterns

- **UI Components** (`components/UiElements.tsx`): Custom Button/Section/Card with variants (primary, cta, teal, outline)
- **Pages** (`pages/`): Route-based components (Home, Services, Tracking, etc.)
- **Tracking Integration**:
  - Mock data in `Tracking.tsx` for development/demo
  - Production uses `server/index.js` proxy with Cheerio scraping
  - API endpoint: `GET /api/tracking?code={tracking_number}`

## Development Workflow

- **Frontend**: `npm run dev` (Vite dev server on port 5173)
- **Backend Proxy**: `cd server && npm start` (Express on port 3001)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (serves built files)

## Code Conventions

- **Language**: Vietnamese UI text throughout (routes like `/mua-ho-hang-my`)
- **Styling**:
  - Use brand colors: `brand-navy` (#1e293b), `brand-blue` (#2563eb), `accent` (#0d9488)
  - Custom shadows: `shadow-soft`, `shadow-card`, `shadow-glow`
  - Button variants: `primary` (blue), `cta` (orange), `teal` (accent)
- **Components**: Export as named exports, use React.FC with TypeScript interfaces
- **Imports**: Group React imports, then third-party, then local components
- **File Structure**: Flat structure in `pages/` and `components/`, empty `hooks/`, `services/`, `utils/` folders

## Common Patterns

- **Navigation**: HashRouter with Vietnamese paths, ScrollToTop component
- **Layout**: Navbar + main content + Footer + FloatingContact wrapper
- **Tracking**: Status steps visualization with progress bar and timeline events
- **Forms**: Simple controlled inputs with loading states
- **API Calls**: Axios in proxy server, fetch commented out in frontend (mock data active)

## Dependencies & Tools

- **Frontend**: react-router-dom, lucide-react (icons), tailwindcss
- **Backend**: express, axios, cheerio, cors
- **Build**: Vite with React plugin, PostCSS, Autoprefixer
- **TypeScript**: Strict config with React types

## Gotchas

- HashRouter requires `#` in URLs (e.g., `/#/tra-cuu`)
- Tracking page has mock data; uncomment API call for production
- Proxy server needed for CORS when calling ksnpost.com
- Vietnamese text encoding in HTML responses from scraped site
- Custom Tailwind colors defined in `tailwind.config.js`

## File References

- [App.tsx](App.tsx) - Main routing and layout
- [components/UiElements.tsx](components/UiElements.tsx) - Reusable UI components
- [pages/Tracking.tsx](pages/Tracking.tsx) - Tracking page with mock/real API toggle
- [server/index.js](server/index.js) - Proxy server for tracking data scraping
- [tailwind.config.js](tailwind.config.js) - Custom theme and colors</content>
  <parameter name="filePath">d:\workspace\ezway\ezway-logistics---main\.github\copilot-instructions.md
