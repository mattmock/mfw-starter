# mfw-starter

This is a minimal starter project using the [mfw](https://github.com/mattmock/mfw) microframework with plain `.html` files as views.

## 🔧 Setup

```bash
npx degit mattmock/mfw-starter my-app
cd my-app

# Add mfw (not included)
npx degit mattmock/mfw mfw

npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 📂 Structure

- `ui/views/` — Native HTML views
- `ui/public/` — Static assets (CSS, images, etc.)
- `mfw/` — Core framework (added manually)
- `server.js` — Express + mfw integration
