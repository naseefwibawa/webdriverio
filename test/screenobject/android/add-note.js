class addNote {
	get skipBtn() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
		)
	}

	get addNoteTxt() {
		return $('//*[@text="Add note"]')
	}

	get noteTxt() {
		return $('//*[@text="Text"]')
	}

	get editNoteTxt() {
		return $('//*[@text="Editing"]')
	}

	get noteTitleField() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
		)
	}

	get noteBodyField() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
		)
	}

	get editNoteBtn() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
		)
	}

	get viewNote() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
		)
	}

	get menuOptionBtn() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]'
		)
	}

	get deleteNoteOption() {
		return $('//*[@text="Delete"]')
	}

	get deleteNoteBtn() {
		return $('//*[@resource-id="android:id/button1"]')
	}

	get sideNav() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
		)
	}

	get trashCanNav() {
		return $('//*[@text="Trash Can"]')
	}

	async saveNote() {
		await driver.back()
		await driver.back()
	}

	get viewTitleTrashCan() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
		)
	}
}

module.exports = new addNote()
