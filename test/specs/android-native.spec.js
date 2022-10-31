describe('Android native ', () => {
	it('access an activity directly', async () => {
		await driver.startActivity(
			'io.appium.android.apis',
			'.app.AlertDialogSamples'
		)

		await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
	})

	it('working with dialog box', async () => {
		await $(
			'//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
		).click()

		//get the alert text
		console.log(await driver.getAlertText())

		// accept alert
		// await driver.acceptAlert()

		// dismiss alert
		// await driver.dismissAlert()

		// click on OK button
		await $('//*[@resource-id="android:id/button1"]').click()

		//assertion
		await expect(
			$('//*[@resource-id="android:id/alertTitle"]')
		).not.toExist()
	})

	it('vertical scrolling', async () => {
		await $('~App').click()
		await $('~Activity').click()

		// scroll to the end (not stable)
		// await $(
		// 	'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'
		// )

		// scroll to text view (more stable)
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
		).click()

		// assertion
		await expect($('~Secure Dialog')).toExist()
	})

	it('horizontal scrolling', async () => {
		await driver.startActivity('io.appium.android.apis', '.view.Gallery1')

		// horizontal scrolling
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
		)
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()'
		)
	})

	it('datepicker', async () => {
		await driver.startActivity(
			'io.appium.android.apis',
			'.view.DateWidgets1'
		)

		// get current date
		const date = await $(
			'//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
		)
		const currentDate = await date.getText()

		// click on change date
		await $('~change the date').click()

		// scroll right to next month
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
		)

		// select the 10 date
		await $('//*[@text="10"]').click()

		// click on ok button
		await $('//*[@resource-id="android:id/button1"]').click()

		// assertion
		await expect(await date.getText()).not.toEqual(currentDate)
	})
})
