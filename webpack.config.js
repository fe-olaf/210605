const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
