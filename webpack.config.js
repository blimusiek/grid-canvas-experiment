module.exports = {
  entry: ['babel-polyfill', './src/'],
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
  },
  module: {
    loaders: [{
      test: /\.ts$/, loaders: ['babel-loader', 'ts-loader'], exclude: /node_modules/
    }],
  }
};
