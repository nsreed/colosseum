import type { Configuration } from 'webpack';
const ExtensionReloader = require('webpack-ext-reloader');
const config = require('./custom-webpack.config');
import * as fs from 'fs';
import * as path from 'path';

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new ExtensionReloader({
      reloadPage: true,
      entries: {
        background: 'background',
      }
    })
  ],
} as Configuration;
