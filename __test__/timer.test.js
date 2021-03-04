const res= require('../source/js/timer.js');
// example mock for closeForm function
//const mock_closeForm = jest.fn(res.closeForm);
const mock_undoCheck = jest.fn(res.undoCheck);
describe("Test UncheckFunction", () => {

	test('Remove', () => {
		document.body.innerHTML =`<input type="radio" id="radio1" name="tSelect" checked>`;
		mock_undoCheck();
		expect(mock_undoCheck).toHaveBeenCalled();
        expect(document.getElementById('radio1')).toHaveProperty('checked', true);
	});
});
