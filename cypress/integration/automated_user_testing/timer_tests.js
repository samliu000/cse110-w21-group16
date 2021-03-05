describe('Pomodoro Timer Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    beforeEach(() => {
      cy.visit('/source/index.html');
    });
    
    describe('Start Button', () => {
        it('Check timer count down', () => {

            cy.get('#start-btn').click();
            cy.wait(3500);
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('25:00');
            });
        });

        it('Items hide on timer start', () => {
            cy.get('#start-btn').click();
            cy.get('#settings').should('not.be.visible');
            cy.get('#help').should('not.be.visible');
            cy.get('#list').should('not.be.visible');
        });
        
        it('Full cycle', () => {
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(0);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('25:00');
            });
            cy.wait(4000);
        });
    });

    describe('Reset Button', () => {
        it('Check reset yes', () => {
            cy.get('#start-btn').click();
            cy.get('#reset').click();
            cy.get('#btn-yes').click();
            
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.have.text('25:00');
            });
        });

        it('Check reset no', () => {
            cy.get('#start-btn').click();
            cy.wait(1000);
            cy.get('#reset').click();
            cy.get('#btn-no').click();
            cy.wait(1000);
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('25:00');
            });
        });

        it('Check reset yes with diff time', () => {
            cy.get('#settings').click();
            cy.get('#focus').clear().type(1);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.get('#reset').click();
            cy.get('#btn-yes').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.have.text('1:00');
            });
        });

    });

    describe('Done Prematurely Button', () => {
        it('Done yes', () => {
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('input[name="tSelect"]').click();
            cy.get('#start-btn').click();
            cy.get('#done-btn').click();
            cy.get('#done-yes').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('25:00');
            });
        });

        it('Done no', () => {
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('input[name="tSelect"]')
            cy.get('#start-btn').click();
            cy.get('#done-btn').click();
            cy.get('#done-no').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('5:00');
            });
        });
        
    });
    describe('Settings', () => {
        it('Changing Focus Time', () => {
            cy.get('#settings').click();
            cy.get('#focus').clear().type(1);
            cy.get('#btn-set').click();
            cy.wait(1000);
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.have.text('1:00');
            });
        });
        it('Changing Short Break Time', () => {
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(2);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('5:00');
            });
        });

        it('Change long break time', () => {
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(5);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('15:00');
            });
        });

        it('Cancel button', () => {
            cy.get('#settings').click();
            cy.get('#btn-no-set').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.have.text('25:00');
            });
        });

    });

});

describe('Automated Button Testing', () => {
    it('Check the add task button', () => {
      cy.visit('/source/index.html')
      cy.contains('+Add Task').click()
      cy.get('input[id="tName"]').click()
      .type('example').should('have.value','example')
      cy.get('button[id="btn-add"]').click()
      cy.get('table[id=table-content]').contains('example')	
  
    });
   it('Checks the delete task button', () =>{
       cy.visit('/source/index.html')
       cy.contains('+Add Task').click()
       cy.get('input[id="tName"]').click().type('example')
       cy.get('button[id="btn-add"]').click()
       cy.get('i[class="fa fa-trash"]').click()
       cy.get('example').should('not.exist');
  });
    it('Check the cancel button', () => {
        cy.visit('/source/index.html')
       cy.contains('+Add Task').click()
       cy.get('input[id="tName"]').click().type('example')
        cy.get('button[class="btn-cancel"]').click()
        cy.get('example').should('not.exist');
    });
  
  });