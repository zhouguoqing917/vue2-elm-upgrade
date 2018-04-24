const path = require('path');
const config = require('../config');
const projectRoot = path.resolve(__dirname, '../');
const env = process.env.NODE_ENV;
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const disPath =  path.resolve(__dirname, '../elm/static/');

let assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
};

let baseWebpackConfig = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: disPath,
    publicPath: process.env.NODE_ENV === 'production' ? '/elm/' : '/',
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
  },

  plugins: [
    // 由于mac不区分大小写，linux区分大小写，可能导致mac上正常，在部署时出错，所以强制区分大小写
    new CaseSensitivePathsPlugin(),
    // 解决因为引入部分 loash 方法而引入整个 loadsh 文件的问题
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),

    // 提取 JS 中的 CSS 文件
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    }),

    // 每次编译清除 dist 文件夹中的文件，以防冗余文件累积
    new CleanWebpackPlugin([disPath]),
    new HtmlWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        //打包重复出现的代码
        vendor: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'vendor'
        },
        //打包第三方类库
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: Infinity
        }
      }
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: "manifest"
    }),
    new webpack.HashedModuleIdsPlugin(),//用于固定模块id 防止调整顺序对于id进行重新打包

    //提升作用域
    new webpack.optimize.ModuleConcatenationPlugin(),

    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../static/libs/mui.min.css'),
    //   to: path.resolve(__dirname, '../elm/static/libs/mui.min.css'),
    //   force: true
    // }]),
    new webpack.BannerPlugin('bytedance inc ltd'),
  ],

  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: MiniCssExtractPlugin.loader
          },
          hotReload: true,
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'css-loader',
          'less-loader'
         ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        include: path.resolve(__dirname, '../src')

      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash:8]',
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }]
  }
};


module.exports = baseWebpackConfig;
