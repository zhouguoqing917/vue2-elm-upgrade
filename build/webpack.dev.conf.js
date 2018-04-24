const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function(name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// });

let webpackDevConfig = merge(baseWebpackConfig, {
    mode: 'development',
    // eval-source-map is faster for development  ,inline-source-map
    devtool: '#eval-source-map',
    performance: {
      hints: 'warning',
    },
    devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    noInfo: true,
    inline: false,
    public: 'ad.toutiao.com:80',
    proxy: [
      {
        context: ['/apix'],
        target: 'http://10.8.160.227:8081',
        secure: false
      }
    ],
  },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env ||JSON.stringify('dev')
        }),

        new webpack.HotModuleReplacementPlugin(),

        // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        context: {
          name: 'index',
        },
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      })
    ]
});
module.exports = webpackDevConfig;
