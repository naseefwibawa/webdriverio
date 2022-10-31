const { config } = require('./wdio.conf.js')
require('dotenv').config()

// ========================
// Browserstack Credential
// ========================
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

// ============
// Specs
// ============
config.specs = ['./test/specs/android/*.js']

// ============
// Capabilities
// ============
config.capabilities = [
	{
		platformName: 'Android',
		'appium:platformVersion': '10.0',
		'appium:deviceName': 'Samsung Galaxy S20',
		'appium:automationName': 'UIAutomator2',
		'appium:app': 'bs://6a1e0b641ca13e8171318591fbdadebc825c181f',
		'appium:autoGrantPermissions': true,
	},
]

// ====================
// Services
// ====================
config.services = ['browserstack']

exports.config = config
