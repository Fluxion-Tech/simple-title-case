#!/usr/bin/env node

const titleCase = require('./index');

// Get input string from command-line args
const input = process.argv.slice(2).join(' ');

if (!input) {
  console.error('❗ Please provide a string to convert.');
  process.exit(1);
}

console.log(titleCase(input));
