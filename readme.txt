Callivos Static Website (React + Vite)

Run:
1. npm install
2. npm run dev

Build for production:
- npm run build

Preview production build:
- npm run preview

Auto Deploy (GitHub Pages):
1. Create a GitHub repository and push this project to the `main` branch.
2. In GitHub repo settings:
   - Go to Settings -> Pages
   - Set Source to "GitHub Actions"
3. Push changes to `main` anytime.
4. GitHub Action `.github/workflows/deploy-pages.yml` will build and deploy automatically.

Live URL format:
- https://<your-github-username>.github.io/<repository-name>/
