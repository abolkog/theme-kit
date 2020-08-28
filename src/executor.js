const { exec } = require('child_process');

module.exports = {
  /**
   * Helper to execute a command
   * @param {string} cmd - The command to execute
   */
  async executeCommand(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, sterr) => {
        if (error || sterr) {
          return reject(error);
        }
        resolve(stdout);
      });
    });
  },
  /**
   * Helper to execute a command and follow the stdout
   * @param {string} cmd - The command to execute
   */
  async excuteAndBindToStd(cmd) {
    const child = exec(cmd);
    child.unref();
    child.stdout.on('data', data => console.log(data));
  },
};
