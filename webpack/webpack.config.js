module.exports = {
  entry: './../src/index.js',
  output: {
    filename: '../../dist/kitroyale.js',
    libraryTarget: 'umd'
  },
  stats: {
    errorDetails: true,
    children: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
