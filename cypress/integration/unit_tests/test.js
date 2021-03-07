import {undoCheck
	from "/source/js/timer.js";
describe('Uncheck Button', () => {
	it('Check the start button', () => {
		cy.visit('./cypress/integration/unit_tests/testing.html');
		cy.get('#radio1').click();
		cy.get('#radio1').invoke(undoCheck);
		undoCheck('yes');
	});
});
