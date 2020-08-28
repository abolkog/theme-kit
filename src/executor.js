const { exec } = require('child_process');

/**
 * Helper to execute a command
 * @param {string} cmd - The command to execute
 */
module.exports = async cmd => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, sterr) => {
      if (error || sterr) {
        return reject(error);
      }
      resolve(stdout);
    });
  });
};
