const ClassInList = (expectedClasses) => {
    return ($el) => {
      const classList = Array.from($el[0].classList); 
      return expectedClasses.some(expectedClass => classList.includes(expectedClass));
    }
}	

describe('Test Help Popup', () => {
	it('Check that the help icon brings up the overlay', () => {
		cy.visit('/source/index.html');
		cy.get('#help').click();
        cy.get("#help-overlay").should('have.attr', 'style', 'display: flex;')
	});
    it('Check that the overlay dissapears on click', () => {
		cy.visit('/source/index.html');
		cy.get('#help').click();
        cy.get('#help-overlay').click();
        cy.get("#help-overlay").should('have.attr', 'style', 'display: none;')
	});
});

describe('Test Settings Popup', () => {
	it('Check that the settings icon brings up the overlay', () => {
        const hasAtLeastOneClass = (expectedClasses) => {
            return ($el) => {
              const classList = Array.from($el[0].classList); 
              return expectedClasses.some(expectedClass => classList.includes(expectedClass));
            }
        }
		cy.visit('/source/index.html');
		cy.get('#settings').click();
        cy.get("#popup-overlay").should('have.attr', 'style', 'display: block;')
        cy.get('#settings-flex').should('satisfy', hasAtLeastOneClass(['active']));
    });
    it('Check that the overlay dissapears on click of cancel button', () => {
		cy.visit('/source/index.html');
        cy.get('#settings').click();
		cy.get('#btn-no-set').click();
        cy.get("#popup-overlay").should('have.attr', 'style', 'display: none;')
    
        cy.get('#settings-flex').should('not.satisfy', ClassInList(['active']));

    });
    it('Check ESC button in Settings', () => {
        it('Check that the overlay dissapears on click of cancel button', () => {
            cy.visit('/source/index.html');
            cy.get('#settings').click();
            cy.get('#setForm').type('{esc}');
            cy.get("#popup-overlay").should('have.attr', 'style', 'display: none;')
           
            cy.get('#settings-flex').should('not.satisfy', ClassInList(['active']));
        });
    });
    it('Check Input Suggestions in Settings', () => {
        it('Check that suggestions exist for timer duration input', () => {
            cy.visit('/source/index.html');
            cy.get('#settings').click();
            cy.get('#focus').interact("val", 10);
            cy.get("#short-break").should('have.attr', 'placeholder', 'Try: 2');
            cy.get('#long-break').should('have.attr', 'placeholder', 'Try: 6');
        });
    });
});