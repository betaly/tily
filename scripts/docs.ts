import 'zx/globals';

import ghpages from 'gh-pages';
import fromCallback from '../src/promise/fromCallback';

async function run() {
  await $`npm run docs:rebuild`;
  await fromCallback(cb => ghpages.publish('docs', {dotfiles: true}, cb));
}

run().catch(console.error);

