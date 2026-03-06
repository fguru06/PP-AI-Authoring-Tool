# Powerpoint Tool

A Vue 3 + Vite project configured for GitHub Pages deployment.

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/)
- [gh-pages](https://github.com/tschaub/gh-pages)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Opens at `http://localhost:5173/Powerpoint-tool/`

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

> **Note:** Before deploying, update the `base` value in [vite.config.js](./vite.config.js) to match your actual GitHub repository name.  
> Example: if your repo URL is `https://github.com/your-username/my-repo`, set `base: '/my-repo/'`.

## Project Structure

```
src/
  components/      # Vue components
  App.vue          # Root component
  main.js          # App entry point
  style.css        # Global styles
index.html         # HTML entry point
vite.config.js     # Vite configuration
```
