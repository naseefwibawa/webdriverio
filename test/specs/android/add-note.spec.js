import addNote from '../../screenobject/android/add-note'
import editNote from '../../screenobject/android/edit-note'

describe('test', () => {
	// it('skip tutorial', async () => {
	// 	await addNote.skipBtn.click()
	// 	await expect(addNote.addNoteTxt).toExist()
	// })

	// it('add note, save changes and verify', async () => {
	// 	await addNote.addNoteTxt.click()
	// 	await addNote.noteTxt.click()

	// 	await expect(addNote.editNoteTxt).toBeDisplayed()

	// 	await addNote.noteTitleField.setValue('TV Shows')

	// 	await addNote.noteBodyField.setValue(
	// 		'BreakingBad\nNaruto\nLucifer\nFriends'
	// 	)

	// 	await addNote.saveNote()

	// 	// assertion
	// 	await expect(addNote.editNoteBtn).toBeDisplayed()
	// 	await expect(addNote.viewNote).toHaveText(
	// 		'BreakingBad\nNaruto\nLucifer\nFriends'
	// 	)
	// })

	before(async () => {
		await editNote.skipTutorial()
		await editNote.addNoteAndSaveChanges(
			'TV Shows',
			'BreakingBad\nLucifer\nFriends\nNaruto'
		)
	})

	it('delete note', async () => {
		const noteTitle = await addNote.noteTitleField.getText()

		await addNote.menuOptionBtn.click()

		await addNote.deleteNoteOption.click()
		await addNote.deleteNoteBtn.click()

		await addNote.sideNav.click()

		await addNote.trashCanNav.click()

		// assertion
		await expect(addNote.viewTitleTrashCan).toHaveText(noteTitle)
	})
})
