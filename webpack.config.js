const path = require('path');

const srcDirectory = path.resolve(__dirname, 'src');
const distDirectory = path.resolve(__dirname, 'dist');

export default {
  mode: 'development',
  entry: `${srcDirectory}/index.tsx`,

  output: {
    path: distDirectory,
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};
