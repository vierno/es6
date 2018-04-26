module.exports = {
  entry: [
    './src/index.js',
    './src/variables.js',
    './src/templateLiterals.js',
    './src/scopes.js',
    './src/spreadOperator.js',
    './src/restParams.js',
    './src/destructuringAssignment.js',
    './src/arrowFunctions.js',
    './src/map.js',
    './src/filter.js',
    './src/modules.js',
    './src/classes.js',
    './src/generators.js'
  ],
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
