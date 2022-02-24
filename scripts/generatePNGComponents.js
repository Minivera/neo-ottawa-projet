/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp');
const { mkdirSync } = require('fs');
const path = require('path');

const { listSvgFiles, writeFile } = require('./utils');

const directory = './src/assets/characters';
const generatedDirectory = './src/assets/__generated__/characters';
const componentsDirectory = './src/components/__generated__/characters';
const countPerBatch = 20;

const convertToPNG = async (source, destination) =>
  sharp(source, { density: 300 })
    .resize({ height: 1080 })
    .png()
    .toFile(destination);

const start = async () => {
  const files = listSvgFiles(directory);

  while (files.length) {
    const batch = files.splice(0, countPerBatch);

    await Promise.all(
      batch.map(async file => {
        console.log('processing', file);

        const imageFilePath = path
          .format({
            ...path.parse(path.join(generatedDirectory, file)),
            base: undefined,
            ext: '.png',
          })
          .replace(/é/g, 'e')
          .replace(/è/g, 'e');
        const componentFilePath = path.format({
          ...path.parse(path.join(componentsDirectory, file)),
          base: undefined,
          ext: '.tsx',
        });
        const relativeImageFilePath = path
          .relative(path.dirname(componentFilePath), imageFilePath)
          .replace(/é/g, 'e')
          .replace(/è/g, 'e');

        mkdirSync(
          path
            .join(generatedDirectory, path.dirname(file))
            .replace('é', 'e')
            .replace('è', 'e'),
          { recursive: true }
        );
        await convertToPNG(path.join(directory, file), imageFilePath);

        console.log('processed', file, 'saving as', componentFilePath);

        writeFile(
          componentFilePath,
          `import React, { ImgHTMLAttributes } from 'react';

import image from '${relativeImageFilePath}';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="${path.parse(file).name}" />;

export default CharacterImage;
        `
        );
      })
    );
  }
};

start().catch(err => {
  console.error(err);
  process.exit(1);
});
