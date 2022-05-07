/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const { render } = require('./dist/server/ssr.js');

const toAbsolute = p => resolve(__dirname, p);

const filePath = toAbsolute('dist/index.html');
const template = readFileSync(filePath, 'utf-8');

(async () => {
  const [imageLinks, appHTML] = await render();
  const html = template.replace(`<!--app-html-->`, appHTML).replace(`<!--image-links-->`, imageLinks);

  writeFileSync(filePath, html);
})();
