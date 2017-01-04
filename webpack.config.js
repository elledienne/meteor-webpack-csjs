var weight = 500;

function dependencies(settings) {
  return {
    devDependencies: {
      'csjs-loader' : '^0.0.1',
      'extract-text-webpack-plugin': '^1.0.1'
    }
  };
}

function config() {
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  return {
    loaders: [{ test: /\.csjs.js$/, loader: ExtractTextPlugin.extract('style-loader', 'css!csjs!babel!') }],
    plugins: [new ExtractTextPlugin('style.css', { allChunks: true })]
  }
}
