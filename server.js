const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static build files (JS, CSS, images). Short-lived caching only:
// the original Vite build relied on content-hashed filenames to make long-term
// immutable caching safe, but this repo may get hand-edited in place (e.g.
// translations) without the filename changing, so we can't promise immutability.
app.use(
  express.static(path.join(__dirname), {
    setHeaders: (res, filePath) => {
      if (filePath.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader("Cache-Control", "public, max-age=3600");
      }
    },
  })
);

// Single-page app: any other route falls back to index.html.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
