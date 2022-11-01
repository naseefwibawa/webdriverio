const { config } = require('./wdio.conf.js')
const path = require('path')

// ============
// Specs
// ============
config.specs = ['./test/specs/android/add-check*.js']

// ============
// Capabilities
// ============
config.capabilities = [
	{
		platformName: 'Android',
		'appium:platformVersion': '11.0',
		'appium:deviceName': 'Pixel 5',
		'appium:automationName': 'UIAutomator2',
		'appium:app': path.join(
			process.cwd(),
			'./app/android/ColorNote+Notepad.apk'
		),
		'appium:autoGrantPermissions': true,
	},
]

// ====================
// Runner Configuration
// ====================
//
config.port = 4723

// ====================
// Services
// ====================
config.services = [
	[
		'appium',
		{
			args: {
				address: 'localhost',
				port: 4723,
				relaxedSecurity: true,
			},
			logPath: './',
		},
	],
]

exports.config = config
