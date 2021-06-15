const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const ESDocCLI = require('esdoc/out/src/ESDocCLI').default;

const root = path.join(__dirname, '..', '..');
const docsPath = path.join(root, 'docs');
const tsTemp = path.join(root, 'ts_temp');

const clearDocsPath = () =>
  Promise.all([fs.remove(docsPath), fs.remove(tsTemp)]);

const runEsdoc = () => {
  const cli = new ESDocCLI([]);

  cli.exec();
};

const copyFiles = () =>
  Promise.all([
    fs.copy(
      path.join(__dirname, '404.html'),
      path.join(docsPath, '404.html'),
    ),
    fs.copy(
      path.join(__dirname, '.nojekyll'),
      path.join(docsPath, '.nojekyll'),
    ),
  ]);

const buildTs = () => execa('tsc -p tsconfig.json', { shell: true });

const generate = async () => {
  await clearDocsPath();
  await buildTs();
  await runEsdoc();
  await copyFiles();
};

(async () => generate())();
