const { default: editNote } = require('../../screenobject/android/edit-note')

describe('Web browser access', () => {
	before(async () => {
		await editNote.skipTutorial()
	})

	it('access external link and verify the content', async () => {
		await $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
		).click()

		await $('//*[@text="Like us on Facebook"]').click()

		// get all the context
		await driver.getContexts()

		// switch to web view chrome
		await driver.switchContext('WEBVIEW_chrome')

		// assert cover image is displayed
		const coverImg = await $('.img.coverPhoto')
		await expect(coverImg).toBeDisplayed()

		// switch back to app
		await driver.switchContext('NATIVE_APP')
		await driver.back()
	})
})
