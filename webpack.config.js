module.exports = {
  entry: './index.js',
  devServer: {
    compress: true,
    disableHostCheck: true,   // That solved it
  } 
};
