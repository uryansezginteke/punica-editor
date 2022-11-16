const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
  return merge(common, {
    mode: 'production',
    output: {
      publicPath: process.env.ASSETS_URL,
      clean: true
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: process.env.BUCKET == 'prod'
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          loader: 'file-loader',
          options: {
            publicPath: `${process.env.ASSETS_URL}assets/`,
            name: '[path][name].[ext]',
            context: path.resolve(__dirname, 'src/assets'),
            emitFile: false
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(0)
      })
    ]
  });
};
