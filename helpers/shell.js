const { exec } = require('child_process');

module.exports = {
  shell: (command) => {
    const shellPromise = new Promise((resolve, reject) => {
      const commandRun = exec(command);
      commandRun.stdout.on('data', (data) => {
        console.log(data.toString());
      });
      commandRun.stderr.on('data', (data) => {
        console.log(data.toString());
      });
      commandRun.on('exit', (code) => {
        console.log(`child process exited with code ${code.toString()}`);
        if (code === 0) {
          resolve();
        } else {
          reject(code);
        }
      });
    });
    return shellPromise;
  },
};
