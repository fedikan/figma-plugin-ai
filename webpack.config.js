const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  return {
    mode: isDevelopment ? 'development' : 'production',

    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: isDevelopment && 'inline-source-map',
    entry: {
      code: './src/code.ts', // This is the entry point for our plugin code.
      users: './src/users.ts', // This is the entry point for our plugin code.
    },
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
    module: {
      rules: [
        // Converts TypeScript code to JavaScript
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    
    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
};