const imageScrapper = require('./src/imageScrapper');
const imageCompressor = require('./src/imageCompressor');
const child_process = require('child_process');

(async () => {
  child_process.exec('rm ./uploads/*.jpg');
  child_process.exec('rm ./temp/*.jpg');

  const path = await imageScrapper();

  await imageCompressor();
  
  console.log(path);
})()
