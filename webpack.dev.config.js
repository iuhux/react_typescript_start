var path = require('path');
var webpack = require('webpack');

var version = require('./package.json').version;

var libRoot = path.join(__dirname, 'client');
var nodeRoot = path.join(__dirname, 'node_modules');

var config = {
// Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  debug: true,

  resolve: {
    root: [libRoot, nodeRoot],
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', 'webpack.js']
  },
  resolveLoader: {
    root: nodeRoot
  },

  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/dev-server',
    'index.tsx'
  ],

  output: {
    library: 'webtop',
    libraryTarget: 'umd',
    path: path.resolve('./dist/lib/' + version + '/js'),
    publicPath: '/dist/lib/' + version + '/js',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },

  module: {
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'react-hot!ts'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'history': 'history',
    'immutable': 'immutable',
    'isormophic-fetch': 'isomorphic-fetch',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'react-redux',
    'react-router': 'ReactRouter',
    'redux': 'redux',
  },
};

module.exports = config;