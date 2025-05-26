# mfw-starter (Express)

A minimal server-rendered web app starter that uses [`mfw`](https://github.com/mattmock/mfw), a lightweight, platform-independent SSR framework.

---

## 🚀 Quick Start

```bash
# Clone this starter project
npx degit mattmock/mfw-starter my-app
cd my-app

# Add mfw as a local folder (outside this repo)
npx degit mattmock/mfw mfw

# Install dependencies and run
npm install
npm run dev
```

---

## 📁 Folder Structure

```
.
├── mfw/                 # pulled separately with degit (not included here)
├── server.js            # Express entry point
├── ui/
│   ├── views/           # Route-based views (LandingPage.js, My404Page.js)
│   ├── components/      # Shared layout (Layout.js)
│   └── public/          # Static assets (CSS, images, etc.)
├── package.json
└── README.md
```

---

## 🧠 How it Works

- Views are plain `.js` modules exporting HTML string functions
- `getRouteMap()` reads the view directory and maps route paths
- `handleRoute()` takes a route and returns rendered HTML
- Express serves static files and uses mfw to resolve routes

---

## 📝 Notes

- `mfw` is not included in this repo. It should be cloned separately into `./mfw`
- This allows you to always stay up to date with the latest version of `mfw`
- You can replace Express with any other server later (e.g. Node http, Bun, Python adapter)

---

## 📎 Links

- [mfw on GitHub](https://github.com/mattmock/mfw)
- [mfw-starter (this repo)](https://github.com/mattmock/mfw-starter)
