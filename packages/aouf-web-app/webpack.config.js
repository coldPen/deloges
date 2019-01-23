/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const AssetsManifest = require('webpack-assets-manifest');
const nodeExternals = require('webpack-node-externals');

const {
  DEV_ENV,
  CORS_ORIGIN,
  BUNDLE_MANIFEST_OUTPUT,
  BUNDLE_SERVER_PATH,
  BUNDLE_CLIENT_PATH,
  BUNDLE_PUBLIC_PATH,
} = require('./src/constants');

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: `${BUNDLE_PUBLIC_PATH}/`,
  },
};

const server = {
  ...commonConfig,
  name: 'server',
  target: 'node',
  entry: {
    document: './src/client/document',
    app: './src/client/app',
  },
  output: {
    ...commonConfig.output,
    path: path.resolve(__dirname, BUNDLE_SERVER_PATH),
    libraryTarget: 'umd',
  },
  plugins: [
    new AssetsManifest({
      output: BUNDLE_MANIFEST_OUTPUT,
    }),
  ],
  externals: [nodeExternals()],
  stats: 'minimal',
};

const client = {
  ...commonConfig,
  name: 'client',
  entry: {
    main: ['./src/client'],
  },
  output: {
    ...commonConfig.output,
    path: path.resolve(__dirname, BUNDLE_CLIENT_PATH),
  },
  plugins: [
    new AssetsManifest({
      output: BUNDLE_MANIFEST_OUTPUT,
      transform: assets => {
        return {
          assets,
          scripts: [assets['main.js']],
        };
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = [client, server];
