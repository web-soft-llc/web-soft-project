const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const dialogInterface = readline.createInterface({ input, output });

const ask = (question) =>
  new Promise((resolve) => {
    dialogInterface.question(`${question}: `, (answer) => {
      resolve(answer);
    });
  });

const close = () => dialogInterface.close();
module.exports = {
  ask,
  close
};
