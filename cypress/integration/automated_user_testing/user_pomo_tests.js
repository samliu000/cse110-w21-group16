describe('user simulation tests', () => {
    it('Experienced user adds taska and comes back later', () => {
        cy.visit('/source/index.html ');
        cy.get('#add-task').click();
        cy.get('#tName').invoke("val","test");
        cy.get('#est').invoke("val", 2).type('{enter}');
        cy.get('[class^="fa fa-trash"]')
        .invoke('attr', 'id').then(($me) => {
            const me = $me;
            cy.get('#add-task').click();
            cy.get('#tName').invoke("val","asdfffffffffffffffffffffffffffffffasassfsfasdfsfsafsaf");
            cy.get('#est').invoke("val", 3).type('{enter}');
            cy.get('#add-task').click();
            cy.get('#tName').invoke("val","test3");
            cy.get('#est').invoke("val", 99999999999999).type('{enter}');
            cy.get('#tName').invoke("val","test4");
            cy.get('#est').invoke("val", 40).type('{enter}');
            cy.get(`[id^=${me}]`).eq(0).click();
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(5);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.get('table').contains('td', '1').should('be.visible');
            cy.get(`[id^=${me}]`).eq(1).click();

            cy.reload();
            cy.get('[class^="fa fa-trash"]').eq(1).click();
            //Ensures that the only task left has correct name
            cy.get('#table-content').contains('asdfffffffffffffffffffffffffffffffasassfsfasdfsfsafsaf');

        });
    });
    it('New User Checks the Help Button, Adds Task, then Resets and Done', () => {
        cy.visit('/source/index.html ');
        cy.get('#help').click();
        cy.get('#help-overlay').click();
        cy.get('#add-task').click();
        cy.get('#tName').invoke("val","asdfffffffffffffffffffffffffffffffasassfsfasdfsfsafsaf");
        cy.get('#est').invoke("val", 3).type('{enter}');
        cy.get('input[name="tSelect"]').click();
        cy.get('#start-btn').click();
        cy.get('#reset').click();
        cy.get('#btn-yes').click();
        cy.get('#timerDisplay').then(($el) => {
            expect($el).to.have.text('25:00');
        });
        cy.get('#done-btn').click();
        cy.get('#done-yes').click();
      
        cy.get('table').contains('td', '1').should('be.visible');

        });
    });
   
