/* eslint-disable @typescript-eslint/no-var-requires */
const { accessSync, mkdirSync, readdirSync, statSync, writeFileSync } = require('fs');
const path = require('path');

const listSvgFiles = (dir, dirPath = '') => {
  const foundFiles = [];

  const files = readdirSync(dir);

  files.forEach(file => {
    if (statSync(path.join(dir, file)).isDirectory()) {
      foundFiles.push(
        ...listSvgFiles(path.join(dir, file), path.join(dirPath, file))
      );
    } else {
      foundFiles.push(path.join(dirPath, file));
    }
  });

  return foundFiles;
};

const isExists = path => {
  try {
    accessSync(path);
    return true;
  } catch {
    return false;
  }
};

const writeFile = (file, data) => {
  const filePath = file.replace('é', 'e').replace('è', 'e');

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

module.exports = {
  listSvgFiles,
  isExists,
  writeFile,
};
