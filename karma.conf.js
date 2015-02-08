// Karma configuration
// Generated on Mon Jan 12 2015 17:57:20 GMT+0200 (IST)
var forEach = require('foreach')

var specFile = 'spec/spec.js'

var customLaunchers = {
  chrome: {
    browserName: 'chrome'
  },
  ie9: {
    browserName: 'internet explorer',
    version: '9'
  },
  ie10: {
    browserName: 'internet explorer',
    version: '10'
  },
  ie11: {
    browserName: 'internet explorer',
    version: '11'
  },
}

forEach(customLaunchers, function(launcher) {
  launcher.base = 'SauceLabs'
})

module.exports = function(config) {
  var confObject = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'browserify'
    ],

    // list of files / patterns to load in the browser
    files: [specFile],

    browserify: {
      debug: true,
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          // browsers have real DOM
          bundle.exclude('jsdom')
        })
      }
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),

    customLaunchers: customLaunchers,

    sauceLabs: {
      testName: 'edited'
    }
  }

  confObject.preprocessors[specFile] = ['browserify']

  config.set(confObject)
}
