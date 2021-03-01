const res= require('../source/js/timer.js');
// example mock for closeForm function
const mock_undoCheck = jest.fn(res.undoCheck);
const mock_getRadioIndex = jest.fn(res.getRadioIndex);
const mock_timer = jest.fn(res.timer);
const mock_countdownDisplay = jest.fn(res.countdownDisplay);
describe("UndoCheck", () => {

	test('Checks if undoCheck unselects a radio button', () => {
		document.body.innerHTML =`<input type="radio" id="radio1" name="tSelect" checked></input>`;
		mock_undoCheck('tSelect');
		expect(mock_undoCheck).toHaveBeenCalled();
        expect(document.getElementById('radio1')).toHaveProperty('checked', false);
	});
});
describe("Timer", () => {
	test('Start button disabled after timer starts', () => {
		document.body.innerHTML =`<button id="start-btn">Start</button>`;
		mock_timer();
		expect(mock_timer).toHaveBeenCalled();
		expect(document.getElementById('start-btn')).toHaveProperty('disabled');
	});

	test('CountdownDisplay', () => {
		document.body.innerHTML =`<div id = "timerDisplay">25:00</div>`;
		mock_countdownDisplay();
		expect(mock_countdownDisplay).toHaveBeenCalled();
		expect(document.getElementById('timerDisplay').textContent).toBe('25:00');
	});

});

	// test('Test Get Radio Index', () => {
	// 	document.body.innerHTML =`<input type="radio" id="radio1" name="tSelect"></input>
	// 	<input type="radio" id="radio1" name="tSelect" checked></input>`;
	// 	let rad = mock_getRadioIndex('tSelect');
	// 	expect(mock_getRadioIndex).toHaveBeenCalled();
	// 	expect(rad).toBe(1);
	// });