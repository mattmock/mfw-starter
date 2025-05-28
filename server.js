import express from "express";
import { renderPage } from "mfw"; // Assumes mfw is installed or linked
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/public", express.static(path.join(process.cwd(), "public")));

app.get("/", async (req, res) => {
  const html = await renderPage("home", { title: "Home" }, {
    layout: "layout",
    cssPath: '<link rel="stylesheet" href="/public/home.css">'
  });
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
