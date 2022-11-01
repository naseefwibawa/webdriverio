import addNote from './add-note'

class editNoteScreen {
	async skipTutorial() {
		await addNote.skipBtn.click()
		await expect(addNote.addNoteTxt).toExist()
	}

	async addNoteAndSaveChanges(noteTitle, noteBody) {
		await addNote.addNoteTxt.click()
		await addNote.noteTxt.click()

		await expect(addNote.editNoteTxt).toBeDisplayed()

		await addNote.noteTitleField.setValue(noteTitle)

		await addNote.noteBodyField.setValue(noteBody)

		await addNote.saveNote()

		// assertion
		await expect(addNote.editNoteBtn).toBeDisplayed()
		await expect(addNote.viewNote).toHaveText(noteBody)
	}
}

export default new editNoteScreen()
