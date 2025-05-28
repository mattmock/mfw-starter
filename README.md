# MFW Starter

A minimal starter template for MFW — a file-based server-side rendering framework.

## 🔧 Setup

This starter project assumes you'll add the core MFW framework from:

👉 https://github.com/mattmock/mfw

Clone the starter with `degit`, then install MFW however you prefer (as a local module or via symlink).


```bash
npx degit mattmock/mfw-starter my-app
cd my-app
npm install
```



## 📦 Install MFW

This starter does not include the MFW core — you must fetch it separately:

```bash
npx degit mattmock/mfw/core core
```

Then import from it in your server:

```js
import { renderPage } from "./core/renderPage.js";
```
## 🚀 Run the Dev Server

```bash
npm start
```

Then open: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ui/
  views/     → HTML views
  partials/  → Layout HTML
public/      → Static CSS
server.js    → Express server
```

## 💡 View-Level CSS

Injected via `cssPath` in your server logic:

```js
cssPath: '<link rel="stylesheet" href="/public/home.css">'
```

And used in `layout.html` like:

```html
{{ cssPath }}
```
