const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Music Visualizer'
    })
  ],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
                ]
          },
          {
              test: /\.js$/,
              exclude: /(node_modules|dist)/,
              use: [
                  'eslint-loader'
                ]
            }
      ]
  }
};