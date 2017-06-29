const path = require('path')

module.exports = {
  defaultExample: true,
  ignore: ['**/index.js'],
  serverHost: 'localhost',
  serverPort: 2020,
  title: 'Primitives',
  webpackConfig: require('./webpack.config.js'),
  sections: [
    {
      name: 'Primitives',
      components: `../primitives/**/*.js`,
    },
  ],
  getComponentPathLine(componentPath) {
    return `import ${path.basename(componentPath, '.js')} from 'primitives'`
  }
}
