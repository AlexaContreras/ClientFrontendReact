const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const javascriptRules = {
  test: /\.(jsx|js)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
    },
  },
};

const stylesRules = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};

const filesRules = {
  test: /\.(jpg|jpeg|png|svg|gif)$/,
  use: ['file-loader'],
};

const fontsRules = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]',
        outputPath: 'assets/fonts',
        esModule: false,
      },
    },
  ],
};

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [javascriptRules, stylesRules, filesRules, fontsRules],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    port: 4000,
    contentBase: path.join(__dirname, 'public/'),
  },
};
