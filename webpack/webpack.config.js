module.exports = {
  entry: './../index.js',
  output: {
    library: 'kitroyale',
    filename: '../../kitroyale.js',
    libraryTarget: 'window'
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
