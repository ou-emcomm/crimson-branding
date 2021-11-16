const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    preferences: './src/preferences.js',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      // images
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          outputPath: 'static',
          esModule: false,
          limit: 1024 * 8, // 8 KB
        },
        exclude: /node_modules/,
      },
      // fonts
      {
        test: /\/webfont\/.*\.(woff(2)?|ttf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts',
        },
        exclude: /node_modules/,
      },
      // scripts
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // styles
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // html
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: './src/index.html.ejs.xslt',
      meta: {
        viewport:
          'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=0',
        'og:title': 'OU Enrollment Management',
        'og:site_name': 'OU Enrollment Management',
        'og:url': 'https://crimson.ou.edu',
        'og:type': 'website',
      },
      filename: 'index.html',
      chunks: ['index'],
      hash: true,
      xhtml: true,
    }),
    new HtmlWebpackPlugin({
      minify: false,
      template: './src/preferences.html.ejs.xslt',
      meta: {
        viewport:
          'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=0',
        'og:title': 'OU Enrollment Management',
        'og:site_name': 'OU Enrollment Management',
        'og:url': 'https://crimson.ou.edu',
        'og:type': 'website',
      },
      filename: 'preferences.html',
      chunks: ['preferences'],
      hash: true,
      xhtml: true,
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
  ],
  output: {
    assetModuleFilename: 'static/[hash][ext][query]',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
