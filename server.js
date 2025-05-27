import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRouteMap, handleRoute } from './mfw/index.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viewPath = path.join(__dirname, 'ui/views');

const routes = await getRouteMap(viewPath, {
  root: 'index',
  notFound: '404'
});

const render = handleRoute(routes, viewPath, {
  props: { siteTitle: 'My HTML mfw App' },
  errorView: 'error'
});

app.use(express.static('ui/public'));

app.get('*', async (req, res) => {
  const html = await render(req.path);
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
