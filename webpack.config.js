const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'jsToolbelt.js',
    library: 'jsToolbelt',
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    rules: [
      {
        include: [path.resolve('src')],
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
