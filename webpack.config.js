module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  mode: "production",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
