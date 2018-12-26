const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  module: {
    strictExportPresence: true,
    rules: [
      // Process JS with Babel.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            'presets': [
              [
                '@babel/preset-env',
                {
                  'useBuiltIns': 'entry',
                },
              ],
            ],
          },
        }],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              // antd组件库替换less变量，覆盖默认配置
              modifyVars: {
                'icon-url': '"/static/fonts/iconfont"',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    symlinks: false,
  },
};