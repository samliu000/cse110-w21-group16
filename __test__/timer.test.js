const res= require('../source/js/functions.js');
const mock = jest.fn(res.undoCheck);
describe("something", () => {

test('tests unchecking of stuff', () => {
	document.body.innerHTML =` <input type="radio" checked="checked" id="male" name="gender" value="male">`;
	mock("gender");
	expect(mock).toHaveBeenCalled();
	expect(document.getElementById('male').checked).toEqual(false);
});
});

