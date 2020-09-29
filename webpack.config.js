// Add this to a webpack.config.js file
/* rails-erb-loader-dependencies ../config.rb */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    site: ['./source/javascripts/site.js.erb'],
    //    style: ['./source/stylesheets/site.css.scss'],
  },
  module: {
    rules: [
      {
        test: /\.erb$/,
        enforce: 'pre',
        loader: 'rails-erb-loader',
        options: {
          runner: 'ruby',
          engine: 'erb'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'site.js',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'site.css'
  })],
};
