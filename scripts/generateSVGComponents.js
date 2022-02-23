/* eslint-disable @typescript-eslint/no-var-requires */
const { default: svgr } = require('@svgr/core');
const {
  readFileSync,
} = require('fs');
const path = require('path');

const { listSvgFiles, writeFile } = require('./utils');

const directory = './src/assets/characters';
const generatedDirectory = './src/components/__generated__/characters';
const countPerBatch = 5;

const compileSvg = async (source, id, options) => {
  return await svgr(
    source,
    {
      ...options,
      svgo: false,
      runtimeConfig: false,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      svgoConfig: {
        plugin: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'prefixIds',
        ],
      },
    },
    {
      filePath: id,
    }
  );
};

const start = async () => {
  const files = listSvgFiles(directory);

  while (files.length) {
    const batch = files.splice(0, countPerBatch);

    await Promise.all(
      batch.map(async file => {
        console.log('processing', file);

        const content = readFileSync(path.join(directory, file));

        const filePath = path.format({
          ...path.parse(path.join(generatedDirectory, file)),
          base: undefined,
          ext: '.tsx',
        });
        const jsxCode = await compileSvg(content, filePath, {
          typescript: true,
        });
        console.log(
          'processed',
          file,
          'saving as',
          path.join(generatedDirectory, file)
        );

        writeFile(filePath, jsxCode);
      })
    );
  }
};

start().catch(err => {
  console.error(err);
  process.exit(1);
});
