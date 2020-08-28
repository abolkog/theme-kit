const cwd = process.cwd();

const CONFIG_DIR_NAME = `${cwd}/.werd`;

const CONFIG_FILE_NAME = `${CONFIG_DIR_NAME}/config.json`;

const DEFAULT_QUESTIONS = [
  {
    type: 'list',
    name: 'environment',
    message: 'Which environment are you working on today?',
    choices: ['development', 'production'],
    defult: 'development',
    validate: function (value) {
      if (!value) {
        return 'Enter a valid value';
      }

      return true;
    },
  },
  {
    type: 'input',
    name: 'storeURL',
    message: 'Enter Shopify store URL?',
    validate: function (value) {
      if (!value) {
        return 'Enter a valid value';
      }

      return true;
    },
  },
  {
    type: 'input',
    name: 'password',
    message: 'Enter Shopify API Password?',
    validate: function (value) {
      if (!value) {
        return 'Dude, enter a valid password so I can the theme for you';
      }

      return true;
    },
  },
];

module.exports = {
  CONFIG_DIR_NAME,
  CONFIG_FILE_NAME,
  DEFAULT_QUESTIONS,
  THEME_CONFIG_FILE: `${cwd}/config.yml`,
};
