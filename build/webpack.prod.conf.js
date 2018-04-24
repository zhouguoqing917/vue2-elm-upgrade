const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const env = config.build.env;

const webpackProdConfig = merge(baseWebpackConfig, {
  mode: "production",
  performance: {
    hints: 'warning',
  },

  devtool: config.build.productionSourceMap ? '#source-map' : false,

  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true,
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      chunksSortMode: 'dependency'
    })
  ]
});

if (config.build.productionGzip) {
  let CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackProdConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp( '\\.(' +  config.build.productionGzipExtensions.join('|') + ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackProdConfig;
