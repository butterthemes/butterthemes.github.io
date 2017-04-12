var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              include: path.join(__dirname, 'src'),
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              loader: 'style-loader'
          },
          {
              test: /\.css$/,
              loader: 'css-loader',
              query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
              }
          }
      ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      //include:  path.join(__dirname, 'src'),
    })
  ]
};
