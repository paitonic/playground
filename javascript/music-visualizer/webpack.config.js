const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
      alias: {
          'three-extras': path.resolve(__dirname, 'node_modules/three/examples/js/')
        }
    },
  plugins: [
    new webpack.ProvidePlugin({
        THREE: 'three'
    }),
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