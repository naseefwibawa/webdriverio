describe('Find Element', () => {
	it('Find Element by accesiibility id', async () => {
		// find element by accessibility id
		await $('~App').click()

		// assertion
		await expect($('~Action Bar')).toBeExisting()
	})

	it('Find Element by class name', async () => {
		const className = await $('android.widget.TextView')

		console.log(await className.getText())

		// assertion
		await expect(className).toHaveText('API Demos')
	})

	it('Find element by xpath', async () => {
		// xpath - (//tagname[@attribute=value])
		await $(
			'//android.widget.TextView[@content-desc="Alert Dialogs"]'
		).click()
		await $(
			'//*[@resource-id="io.appium.android.apis:id/select_button"]'
		).click()

		// find by text
		await $('//*[@text="Command two"]').click()

		// assertion
		const textAssertion = await $('//android.widget.TextView')
		await expect(textAssertion).toHaveText('You selected: 1 , Command two')
	})

	it('find element by UIAutomator', async () => {
		await $('android=new UiSelector().textContains("Alert")')
	})

	it('find multiple element', async () => {
		const expectedList = [
			'API Demos',
			"Access'ibility",
			'Accessibility',
			'Animation',
			'App',
			'Content',
			'Graphics',
			'Media',
			'NFC',
			'OS',
			'Preference',
			'Text',
			'Views',
		]

		const actualList = []
		const textList = await $$('android.widget.TextView')

		for (const element of textList) {
			actualList.push(await element.getText())
		}

		// assertion
		await expect(actualList).toEqual(expectedList)
	})

	it('text field', async () => {
		await $('~Views').click()
		await $('~Auto Complete').click()
		await $('//*[@content-desc="1. Screen Top"]').click()

		// enter country name
		const textField = await $(
			'//*[@resource-id="io.appium.android.apis:id/edit"]'
		)

		await textField.addValue('Canada')

		// assertion
		await expect(textField).toHaveText('Canada')
	})
})
