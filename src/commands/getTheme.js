const fs = require('fs');
const inquirer = require('inquirer');
const themeKitUtil = require('../themekit');
const common = require('../util/common');
const configUpdater = require('../io/configUpdater');

const isConfigDirExists = fs.existsSync(common.CONFIG_DIR_NAME);
const isConfigFileExists = fs.existsSync(common.CONFIG_FILE_NAME);

module.exports = async () => {
  if (!isConfigDirExists) {
    fs.mkdirSync(common.CONFIG_DIR_NAME);
  }

  let questions = common.DEFAULT_QUESTIONS;
  if (isConfigFileExists) {
    const prevAnswers = JSON.parse(fs.readFileSync(common.CONFIG_FILE_NAME));
    questions = common.DEFAULT_QUESTIONS.map(question => {
      const prev = prevAnswers[question.name];
      question.default = prev;
      return question;
    });
  }

  const answers = await inquirer.prompt(questions);
  fs.writeFileSync(common.CONFIG_FILE_NAME, JSON.stringify(answers));
  console.log('One sec, fetching themes ....');

  const themeList = await themeKitUtil.listThemes(answers);
  const { themeId: dirtyThemeData } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'dummy',
      message: 'Fetche themes, Ready to continue?', // Prevent accedental select
    },
    {
      type: 'list',
      name: 'themeId',
      message: 'Which theme you want to fetch?',
      choices: themeList,
    },
  ]);

  const themeData = dirtyThemeData.split('-');
  const themeId = themeData[0].replace('[', '').replace(']', '').trim();

  themeKitUtil.getTheme(answers.password, answers.storeURL, themeId);
};
