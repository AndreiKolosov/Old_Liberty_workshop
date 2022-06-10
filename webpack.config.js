const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  entry: {
    main: './src/pages/index/index.js',
    blog: './src/pages/blog/blog.js',
    gallery: './src/pages/gallery/gallery.js',
    personal: './src/pages/personal/personal.js',
    cart: './src/pages/cart/cart.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/pages/blog/blog.html',
      chunks: ['blog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'gallery.html',
      template: './src/pages/gallery/gallery.html',
      chunks: ['gallery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'personal.html',
      template: './src/pages/personal/personal.html',
      chunks: ['personal'],
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: './src/pages/cart/cart.html',
      chunks: ['cart'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
