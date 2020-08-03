const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
})