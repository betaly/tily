#!/usr/bin/env zx

const ghpages = require('gh-pages');

async function run() {
  await $`npm run docs:rebuild`;
  await new Promise(resolve => ghpages.publish('docs', {dotfiles: true}, resolve));
}

run().catch(console.error);

