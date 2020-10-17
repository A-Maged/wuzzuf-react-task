const {
  override,
  addWebpackAlias,
  addBabelPreset,
  fixBabelImports,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@Entities']: path.resolve(__dirname, 'src/app/entities'),
    ['@Components']: path.resolve(__dirname, 'src/components'),
    ['@Repo']: path.resolve(__dirname, 'src/app/repo'),
    ['@Lib']: path.resolve(__dirname, 'src/app/lib'),
    ['@Contracts']: path.resolve(__dirname, 'src/app/lib/contracts'),
    ['@State']: path.resolve(__dirname, 'src/app/state/index.ts'),
    ['@Config']: path.resolve(__dirname, 'src/app/config.ts'),
  }),
  addBabelPreset('@emotion/babel-preset-css-prop'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);
