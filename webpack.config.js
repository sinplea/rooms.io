module.exports = {
  entry: __dirname + '/src',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devtools: 'source-maps',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  }
}
