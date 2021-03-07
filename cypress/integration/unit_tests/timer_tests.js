describe('Pomodoro Timer Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    beforeEach(() => {
      cy.visit('/source/index.html');
    });
    
    describe('Storage', () => {

        it('Nothing in storage', () => {
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('#add-task').click();
            cy.get('*[class="fa fa-trash"]').click();

            // settings
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(5);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.wait(2000);
        });

        it('Check if stored item is populated in timer', () => {

            // make task
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task2');
            cy.get('#est').clear().type('2');
            cy.get('#btn-add').click();
            cy.get('input[name="tSelect"]').first().click();

            // adjust settings
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(5);
            cy.get('#btn-set').click();
            cy.get('#start-btn').click();
            cy.wait(2000);

            cy.visit('/source/index.html');

            // I expect a radio button to be there
            cy.get('input[name="tSelect"]').first().click();
        });
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

        it('Check reset while not started', () => {
            cy.get('#reset').click();
            cy.get('#btn-yes').should('not.be.visible');
        });

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
            cy.wait(1000);
            cy.get('#done-btn').click();
            cy.get('#done-yes').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('25:00');
            });
        });

        it('Done yes on fourth pomo session', () => {
            // make task
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('input[name="tSelect"]').click();

            // adjust settings
            cy.get('#settings').click();
            cy.get('#focus').clear().type(0);
            cy.get('#short-break').clear().type(0);
            cy.get('#long-break').clear().type(80);
            cy.get('#btn-set').click();

            // start timer and wait till long timer
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#start-btn').click();
            cy.wait(2000);
            cy.get('#start-btn').click();
            cy.wait(2000);

            // modify focus time
            cy.get('#settings').click();
            cy.get('#focus').clear().type(1);
            cy.get('#btn-set').click();

            // start timer so we can click on done
            cy.get('#start-btn').click();
            cy.wait(1000);
            cy.get('#done-btn').click();
            cy.get('#done-yes').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('0:00');
            });
        });

        it('Done no', () => {
            cy.get('#add-task').click();
            cy.get('#tName').clear().type('Test Task');
            cy.get('#est').clear().type('1');
            cy.get('#btn-add').click();
            cy.get('input[name="tSelect"]').click();
            cy.get('#start-btn').click();
            cy.wait(1000);
            cy.get('#done-btn').click();
            cy.get('#done-no').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.not.have.text('5:00');
            });
        });
        
    });
    describe('Settings', () => {
        it('No Change', () => {
            cy.get('#settings').click();
            cy.get('#btn-set').click();
            cy.get('#timerDisplay').then(($el) => {
                expect($el).to.have.text('25:00');
            });
        });

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
