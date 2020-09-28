const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundles.js',
    path: path.resolve( __dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css/,
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    })
  ]
}