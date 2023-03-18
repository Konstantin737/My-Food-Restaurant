const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  }
};