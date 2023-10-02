# React + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Step 1: npm create vite@latest <br/>
Step 2: npm install <br/>
Step 3: npm install - D tailwind postcss autoprefixer <br/>
Step 4: npm tailwind init -p <br/>
Step 5: Add content in the tailwind config.js <br/>
Step 6: Add required tailwind imports to index css <br/>
Step 7: Type "npm run dev" to the terminal to run the program <br/>

How to setup page using react   <br/>
1. npm install gh-pages --save-dev   <br/>
2. Add homepage in the vite.config (the link of your website)  <br/>
3. Add Scripts "predeploy" and deploy    <br/>
  "predeploy": "npm run build",  <br/>
  "deploy": "gh-pages -d dist",  <br/>
4. run in the terminal "npm run deploy"  <br/>
