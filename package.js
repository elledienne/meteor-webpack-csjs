Package.describe({
    name: 'elledienne:csjs',
    version: '1.0.0',
    summary: 'Integrate CSJS import (.csjs.js) with Webpack',
    git: 'https://github.com/elledienne/meteor-webpack-csjs.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webpack:core-config@1.0.1');
  api.add_files(['webpack.config.js']);
});
