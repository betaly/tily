const fse = require('fs-extra');
const path = require('path');

const pkgRoot = path.join(__dirname, '../');
const distDir = 'dist';

const copyRelationalFiles = (pathRootDir, pathDistDir) =>
  Promise.all(
    ['package.json', '.npmignore', 'README.md', 'LICENSE', 'CHANGELOG.md']
      .filter(file => fse.existsSync(path.join(pathRootDir, file)))
      .map(file => fse.copyFile(path.join(pathRootDir, file), path.join(pathDistDir, file))),
  );

async function prerelease() {
  try {
    await copyRelationalFiles(pkgRoot, distDir);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

prerelease().catch(() => {});
