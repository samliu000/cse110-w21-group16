const ClassInList = (expectedClasses) => {
    return ($el) => {
      const classList = Array.from($el[0].classList); 
      return expectedClasses.some(expectedClass => classList.includes(expectedClass));
    }
}	

describe('Test Help Popup and Done button', () => {
	it('Check that the help icon brings up the overlay', () => {
		cy.visit('/source/instrumented/index.html');
		cy.get('#help').click();
        cy.get("#help-overlay").should('have.attr', 'style', 'display: flex;')
	});
    it('Check that the overlay dissapears on click', () => {
		cy.visit('/source/instrumented/index.html');
		cy.get('#help').click();
        cy.get('#help-overlay').click();
        cy.get("#help-overlay").should('have.attr', 'style', 'display: none;');
	});
	
   it('Checks that the done button pops up the confirmation menu', () =>{
        cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#est').invoke("val", 2).type('{enter}');
		cy.get('#table-content').contains('td', 'test');
        cy.get('#start-btn').click();
        cy.get('#done-btn').click();
        cy.get('#popup-overlay').should('have.attr', 'style', 'display: block;');
        cy.get('#done-flex').should('satisfy', ClassInList(['active']));
    });
    it('Checks that the no button after the done button removes the popup', () =>{
        cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#est').invoke("val", 2).type('{enter}');
		cy.get('#table-content').contains('td', 'test');
        cy.get('#start-btn').click();
        cy.get('#done-btn').click();
        cy.get('#done-no').click();
        cy.get('#popup-overlay').should('have.attr', 'style', 'display: none;');
        cy.get('#done-flex').should('not.satisfy', ClassInList(['active']));
    });
});



describe('Test Settings Popup', () => {
	it('Check that the settings icon brings up the overlay', () => {
		cy.visit('/source/instrumented/index.html');
		cy.get('#settings').click();
        cy.get("#popup-overlay").should('have.attr', 'style', 'display: block;')
        cy.get('#settings-flex').should('satisfy', ClassInList(['active']));
    });
    it('Check that the overlay dissapears on click of cancel button', () => {
		cy.visit('/source/instrumented/index.html');
        cy.get('#settings').click();
		cy.get('#btn-no-set').click();
        cy.get("#popup-overlay").should('have.attr', 'style', 'display: none;')
    
        cy.get('#settings-flex').should('not.satisfy', ClassInList(['active']));

    });
    it('Check ESC button in Settings', () => {
            cy.visit('/source/instrumented/index.html');
            cy.get('#settings').click();
            cy.get('#setForm').type('{esc}', {force: true});
            cy.get("#popup-overlay").should('have.attr', 'style', 'display: none;')
           
            cy.get('#settings-flex').should('not.satisfy', ClassInList(['active']));
    });
    it('Check Input Suggestions in Settings', () => {
            cy.visit('/source/instrumented/index.html');
            cy.get('#settings').click();
            cy.get('#focus').type(10);
            cy.get("#short-break").should('have.attr', 'placeholder', 'Try: 2');
            cy.get('#long-break').should('have.attr', 'placeholder', 'Try: 6');
    });
});
