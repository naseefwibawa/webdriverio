class addChecklist {
	get checklistTxt() {
		return $$(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]'
		)
	}

	get checklistOkBtn() {
		return $('//*[@resource-id="android:id/button1"]')
	}

	get checklistTxtField() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit"]'
		)
	}

	get checklistNextBtn() {
		return $('//*[@resource-id="android:id/button3"]')
	}

	get addChecklistBtn() {
		return $('//*[@text="Checklist"]')
	}

	get addItem() {
		return $('//*[@text="Add Item"]')
	}
}

export default new addChecklist()
