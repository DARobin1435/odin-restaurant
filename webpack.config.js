
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: 'inline-source-map',  
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.(jpg|png)$/i,
        type: 'asset/resource'
      },
    ]
  },
};
