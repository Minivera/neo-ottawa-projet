/* eslint-disable @typescript-eslint/no-var-requires */
const {
  readFileSync,
  mkdirSync,
  accessSync,
  writeFileSync,
} = require('fs');
const path = require('path');

const expressionExtractorRegex = /character=([A-Za-z0-9\-_]*) expression=([A-Za-z0-9\-_]*)/gm;
const file = './data/story.json';
const generatedDirectory = './src/data/__generated__';

const isExists = path => {
  try {
    accessSync(path);
    return true;
  } catch {
    return false;
  }
};

const writeFile = (filePath, data) => {
  try {
    const dirname = path.dirname(filePath);
    const exist = isExists(dirname);
    if (!exist) {
      mkdirSync(dirname, { recursive: true });
    }

    writeFileSync(filePath, data, 'utf8');
  } catch (err) {
    throw new Error(err);
  }
};

const start = () => {
  const storyFileContent = readFileSync(file).toString();

  const matches = storyFileContent.matchAll(expressionExtractorRegex);

  const knownExpressions = {};
  for (const match of matches) {
    const character = match[1];
    const expression = match[2];

    if (!knownExpressions[character]) {
      knownExpressions[character] = [];
    }

    if (knownExpressions[character].includes(expression)) {
      continue;
    }

    knownExpressions[character].push(expression);
  }

  Object.keys(knownExpressions).forEach(key => {
    knownExpressions[key].sort();
  });

  const savedContent = `
export const knownExpressions = ${JSON.stringify(knownExpressions, null, 2)};
  `;

  writeFile(path.join(generatedDirectory, 'knownExpression.ts'), savedContent);
};

start();
