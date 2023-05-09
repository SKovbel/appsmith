module.exports = {
    entry: './../index.js',
    output: {
      filename: '../../kitroyal.js',
      library: 'kitroyale',
      libraryTarget: 'umd'
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
