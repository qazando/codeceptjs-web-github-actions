const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      browser: 'chrome',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  name: 'curso-codeceptjs-matiana',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}