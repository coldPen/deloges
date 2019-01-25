/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const AssetsManifest = require('webpack-assets-manifest');
const nodeExternals = require('webpack-node-externals');

const {
  DEV_ENV,
  BUNDLE_MANIFEST_OUTPUT,
  BUNDLE_SERVER_PATH,
  BUNDLE_CLIENT_PATH,
  BUNDLE_PUBLIC_PATH,
} = require('./src/constants');

const commonConfig = {
  mode: DEV_ENV ? 'development' : 'production',
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
      {
        test: /src\/public\//,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              emitFile: false,
            },
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
    main: './src/client/static',
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
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
  stats: 'minimal',
};

const client = {
  ...commonConfig,
  name: 'client',
  entry: {
    main: './src/client',
  },
  output: {
    ...commonConfig.output,
    path: path.resolve(__dirname, BUNDLE_CLIENT_PATH),
  },
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new AssetsManifest({
      output: BUNDLE_MANIFEST_OUTPUT,
      transform: assets => ({
        assets,
        scripts: [assets['main.js']],
      }),
    }),
  ],
};

module.exports = [client, server];
