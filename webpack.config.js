const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new CopyPlugin({
    patterns: [
      { from: './src/img/me.jpg', to: 'img' },
    ],
  })],

};
