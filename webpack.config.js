module.exports = {
    entry: './src/index.js',
    output: {
      path: '/dist',
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};