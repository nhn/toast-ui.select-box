/**
 * Config file for testing
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPrefixer = require('postcss-prefixer');

const webdriverConfig = {
  hostname: 'fe.nhnent.com',
  port: 4444,
  remoteHost: true
};

const name = 'toastui-select-box';

/**
 * Set config by environment
 * @param {object} defaultConfig - default config
 * @param {string} server - server type ('ne' or local)
 */
function setConfig(defaultConfig, server) {
  if (server === 'ne') {
    defaultConfig.customLaunchers = {
      IE9: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '9'
      },
      IE10: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '10'
      },
      IE11: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '11',
        platformName: 'windows'
      },
      Edge: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'MicrosoftEdge'
      },
      'Chrome-WebDriver': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome'
      },
      'Firefox-WebDriver': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'firefox'
      },
      'Safari-WebDriver': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'safari'
      }
    };
    defaultConfig.browsers = [
      'IE9',
      'IE10',
      // 'IE11',
      // 'Edge',
      'Chrome-WebDriver',
      'Firefox-WebDriver'
      // 'Safari-WebDriver' // active only when safari test is needed
    ];
    defaultConfig.reporters.push('coverage');
    defaultConfig.reporters.push('junit');
    defaultConfig.coverageReporter = {
      dir: 'report/coverage/',
      reporters: [
        {
          type: 'html',
          subdir(browser) {
            return `report-html/${browser}`;
          }
        },
        {
          type: 'cobertura',
          subdir(browser) {
            return `report-cobertura/${browser}`;
          },
          file: 'cobertura.txt'
        }
      ]
    };
    defaultConfig.junitReporter = {
      outputDir: 'report/junit',
      suite: ''
    };
  } else {
    defaultConfig.browsers = ['ChromeHeadless'];
  }
}

module.exports = function(config) {
  const defaultConfig = {
    basePath: './',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        alias: {
          '@src': path.resolve(__dirname, './src/js')
        }
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /(node_modules|dist)/,
            loader: 'eslint-loader'
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|dist)/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            enforce: 'post',
            test: /\.js$/,
            exclude: /(test|bower_components|node_modules)/,
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true
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
                      prefix: `tui-select-box-`
                    })
                  ]
                }
              }
            ]
          }
        ]
      },
      plugins: [new MiniCssExtractPlugin({ filename: `${name}.css` })]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true
  };

  /* eslint-disable */
  setConfig(defaultConfig, process.env.KARMA_SERVER);
  config.set(defaultConfig);
};
