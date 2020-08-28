#!/usr/bin/env node

const program = require('commander');
const { switchTheme, watchTheme, getTheme } = require('./commands');

program.version('1.0.0').description('Shopify ThemeKit CLI Wrapper');

program
  .command('switch')
  .alias('s')
  .description('Switching the current dev theme')
  .action(switchTheme);

program
  .command('get')
  .alias('g')
  .description('Get a theme from shopify')
  .action(getTheme);

program
  .command('dev')
  .alias('d')
  .description('Run theme watch')
  .action(watchTheme);

program.parse(process.argv);
