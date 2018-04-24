let config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
let path = require('path');
let express = require('express');
const webpack = require('webpack');
const opn = require('opn');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port || 3001;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

const server = express();
let compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
});
function getIPAdress(){
  let interfaces = require('os').networkInterfaces();
  for(let devName in interfaces){
    let iface = interfaces[devName];
    for(let i=0;i<iface.length;i++){
      let alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address;
      }
    }
  }
}
let local_ip=getIPAdress();
let context = config.dev.context;
let proxypath = config.dev.proxypath || 'http://'+local_ip+':8001' ;
switch (process.env.NODE_ENV) {
  case 'local':
    proxypath = 'http://'+local_ip+':8001';
    break;
  case 'online':
    proxypath = 'http://cangdu.org:8001';
    break;
  default:
    proxypath = config.dev.proxypath;
}
let options = {
  target: proxypath,
  changeOrigin: true,
};
if (context.length) {
  server.use(proxyMiddleware(context, options));
}

// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')());

// serve webpack bundle output
server.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
console.log(staticPath)
server.use(staticPath, express.static('./static'));

module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  let uri = 'http://'+local_ip+ ':' + port;
  console.log('Listening at ' + uri + '\n');
  // when env is testing, don't need open it
  opn(uri)

});
