# Krishna Bansal Portfolio

A simple multi-page portfolio built with React, Vite, and React Router DOM.

## Run the project

1. Open a terminal in the `my-portfolio` folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`.

Useful commands:

```bash
npm run lint
npm run build
```

## Component structure

```text
App
├── BrowserRouter
│   ├── ScrollToTop
│   └── SiteLayout
│       ├── Header
│       │   └── ThemeToggle
│       ├── Pages (Home, About, Skills, Projects, Contact, ProjectDetails)
│       │   └── ProjectCard
│       └── Footer
```

`App` contains the routes and shared application state. `SiteLayout` keeps the common header and footer outside the individual pages. Reusable UI pieces such as `ProjectCard`, `SectionHeading`, and `ThemeToggle` are kept in the `components` folder.

## State lifting and prop drilling

The selected theme is stored in `App` because both the page layout and the theme button need access to it. The `theme` value and `onThemeToggle` function are passed from `App` to `SiteLayout`, then to `Header`, and finally to `ThemeToggle`. This is a small example of state lifting and prop drilling.

The contact form state stays inside `Contact` because no other component needs its form values. The loading state also stays in `App` because it controls the initial application screen.

## useEffect hooks

- **Theme effect in `App`:** Updates the `data-theme` attribute on the root HTML element and saves the selected theme to `localStorage`. This keeps the theme applied across the site and persists it after refresh.
- **Loading effect in `App`:** Starts a one-second timer when the app opens, then hides the simple loading screen. The cleanup function clears the timer if needed.
- **Scroll effect in `ScrollToTop`:** Watches the current route pathname and scrolls the window to the top whenever the user changes pages.
