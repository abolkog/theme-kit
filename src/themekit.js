const executor = require('./executor');

/**
 * ThemeKit Wrapper
 */
module.exports = {
  /**
   * Get list of themes
   * @param {Object} data - The Shopify URL and Password param
   * @param {string} data.password - The Shopify app password
   * @param {string} data.storeURL - The Shopify URL
   */
  async listThemes(data) {
    console.log(data);
    const result = [];
    const dirty = await executor(
      `theme get --list -p=${data.password} -s=${data.storeURL}`
    );

    dirty
      .split('\n')
      .slice(1)
      .forEach(item => {
        let cleanItem = item.trim();
        // FIXME: Is the theme ID length alwasy fixed? If not the follwing will break at some point
        const themId = cleanItem.substr(1, 12);
        let themName = cleanItem.substr(14);
        const isLiveTheme = themName.indexOf('[live]') != -1;
        themName = themName.replace('[live]', '');

        if (!themName && !themId) {
          return;
        }

        let formatedName = `${themId} - ${themName}`;
        if (isLiveTheme) {
          formatedName = `${formatedName} - LIVE`;
        }
        result.push(formatedName);
      });

    return result;
  },
};
