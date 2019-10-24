const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPrefixer = require('postcss-prefixer');
const autoprefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, { mode = 'development' }) => {
  const isProduction = mode === 'production';
  const { version, author, license } = pkg;
  const name = 'toastui-select-box';
  const BANNER = [
    `TOAST UI Select Box`,
    `@version ${version} | ${new Date().toDateString()}`,
    `@author ${author}`,
    `@license ${license}`
  ].join('\n');

  const config = {
    mode,
    entry: './src/js/index.js',
    output: {
      library: ['tui', 'SelectBox'],
      libraryTarget: 'umd',
      libraryExport: 'default',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist',
      filename: name + (isProduction ? '.min.js' : '.js')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|dist)/,
          loader: 'eslint-loader',
          options: {
            failOnError: isProduction
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|dist)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          use: 'url-loader'
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  postcssPrefixer({
                    prefix: 'tui-select-box-',
                    ignore: ['tui-select-box']
                  }),
                  autoprefixer
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: BANNER,
        entryOnly: true
      }),
      new MiniCssExtractPlugin({ filename: name + (isProduction ? '.min.css' : '.css') })
    ]
  };

  if (isProduction) {
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          extractComments: false
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    };
  } else {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devtool = 'inline-source-map';
    config.devServer = {
      historyApiFallback: false,
      progress: true,
      host: '0.0.0.0',
      disableHostCheck: true
    };
  }

  return config;
};
