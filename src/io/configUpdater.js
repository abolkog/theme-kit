const fs = require('fs');
const yaml = require('js-yaml');
const common = require('../util/common');

/**
 * Update config.yml file
 * @param {string} themeId - The theme id to be updated
 * @param {string} password - Shopify app password
 * @param {string} storeURL - Shopify store URL
 */
module.exports = (themeId, password, storeURL) => {
  const updateFile = () => {
    console.log('Updating configuration file ...');
    const fileContents = fs.readFileSync(common.THEME_CONFIG_FILE, 'utf8');
    const data = yaml.safeLoad(fileContents);
    const development = {
      password,
      theme_id: themeId,
      store: storeURL,
    };
    data.development = development;
    const updatedData = { ...data };
    writeToFile(updatedData);
  };

  const createFile = () => {
    const development = {
      password,
      theme_id: themeId,
      store: storeURL,
    };
    const data = {
      development,
    };
    const updatedData = { ...data };
    writeToFile(updatedData);
  };

  const writeToFile = data => {
    const ymlData = yaml.safeDump(data);
    fs.writeFileSync(common.THEME_CONFIG_FILE, ymlData, 'utf8');
  };

  const isFileExits = fs.existsSync(common.THEME_CONFIG_FILE);
  if (!isFileExits) {
    createFile();
  } else {
    updateFile();
  }
};
