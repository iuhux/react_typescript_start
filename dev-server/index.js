const config = require('./config');

if (process.env.NODE_ENV !== 'production') {
    // 非production模式下，使用webpack-dev-server处理js请求
    var WebpackDevServer = require("webpack-dev-server");
    var webpack = require("webpack");
    var webpackConfig = require('../webpack.dev.config');

    var compiler = webpack(webpackConfig);

    var WebpackDevServer = new WebpackDevServer(compiler, {
        // webpack-dev-server options

        contentBase: 'dist/',
        // or: contentBase: "http://localhost/",

        hot: true,
        // Enable special support for Hot Module Replacement
        // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
        // Use "webpack/hot/dev-server" as additional module in your entry point
        // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

        // Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.
        historyApiFallback: false,

        // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
        // Use "*" to proxy all paths to the specified server.
        // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
        // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
        /*proxy: {
            "*": 'http://localhost:' + (config.port + 1)
        },*/

        // webpack-dev-middleware options
        quiet: false,
        noInfo: false,
        lazy: false,
        filename: webpackConfig.output.filename,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: webpackConfig.output.publicPath,
        //headers: { "X-Custom-Header": "yes" },
        stats: { colors: true }
    });

    WebpackDevServer.listen(config.port, '0.0.0.0', function() {});
}

const express = require('express');
//var httpProxy = require('http-proxy');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "../")));

//var proxy = httpProxy.createProxyServer({});

/*app.use('/api/v1', function (req, res) {
    proxy.web(req, res, { target: config.host, xfwd: true });
});*/

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

console.log("try to starting server at port %d", config.port);
var appServer = app.listen(config.port, config.host, err => {
  if (err) {
  } else {
        var address = appServer.address();
        var host = address.address;
        var port = address.port;
        console.log("is listening at http://%s:%s", config.host, config.port);
  }
});


process.on('uncaughtException', function (err) {
    console.error("UncaughtException: ", {
        message : err.message,
        stack : err.stack
    });
});