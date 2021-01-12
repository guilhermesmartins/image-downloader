const imagemin = require('imagemin');

const imageCompressor = async () => {
  const files = await imagemin(['temp/*.jpg'], {
    destination: '../uploads',
    plugins: [],
  });
};

module.exports = imageCompressor;
