const exec = require('child_process').exec;
const path = "D:\\Program Files (x86)\\npm\\4.1.2\\";
exec(path + ' run clean' + path + ' npm run foreverStop', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);

  exec(path + 'npm run build &&' + path + ' npm run foreverStart', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
