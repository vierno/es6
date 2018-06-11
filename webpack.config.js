module.exports = {
  entry: [
    './src/index.js',
    './src/variables.js',
    './src/templateLiterals.js',
    './src/spreadOperator.js',
    './src/restParams.js',
    './src/destructuringAssignment.js',
    './src/arrowFunctions.js',
    './src/map.js',
    './src/filter.js',
    './src/modules.js',
    './src/classes.js',
    './src/promises.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
