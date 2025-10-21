const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const staticRoot = path.join(__dirname, 'site');

app.disable('x-powered-by');
app.use(compression());

// Serve static files, resolve .html extensions automatically
app.use(express.static(staticRoot, {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    }
  }
}));

// SPA-like fallback to index.html for unknown GET routes (optional, safe for static sites)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Static server listening on port ${PORT}`);
});
