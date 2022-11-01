const {
	default: addChecklist,
} = require('../../screenobject/android/add-checklist')
const { default: addNote } = require('../../screenobject/android/add-note')
const { default: editNote } = require('../../screenobject/android/edit-note')

describe('checklist', () => {
	before(async () => {
		await editNote.skipTutorial()
	})
	it('add checklist and verify', async () => {
		await addNote.addNoteTxt.click()
		await addChecklist.addChecklistBtn.click()
		await expect(addNote.editNoteTxt).toBeDisplayed()

		await addNote.noteTitleField.setValue('haha')
		await addChecklist.addItem.click()
		await addChecklist.checklistTxtField.setValue('test123')
		await addChecklist.checklistNextBtn.click()
		await addChecklist.checklistTxtField.setValue('automation is fun')
		await addChecklist.checklistOkBtn.click()
		const checklistText = await addChecklist.checklistTxt[1].getText()
		await expect(checklistText).toEqual('automation is fun')
	})
})
