describe('Pomodoro Timer Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    beforeEach(() => {
      cy.visit('/source/index.html ');
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
    describe('More timer tests', () => {
        it('Check the minutes', () => {
           cy.visit('/source/index.html ');
          cy.get('div[id="timerDisplay"]').then((timer) => {
          const  startTime = timer.text();
              cy.get('button[id="start-btn"]').click();
      
           cy.wait(3000).then(() => {
              const endTime = timer.text();
              var arrayStart = startTime.split(":");
              var arrayEnd = endTime.split(":");
              expect(parseInt(arrayStart[0]-1,10)).equals(parseInt(arrayEnd[0],10));
          });
          });
          });
        it('Check the seconds', () => {
		 cy.visit('/source/index.html ');
		 cy.get('div[id="timerDisplay"]').then((timer) => {
		 cy.get('button[id="start-btn"]').click();
       
          	cy.wait(3000).then(() => {
		       const endTime = timer.text();
		       var arrayEnd = endTime.split(":");
		       expect(58).equals(parseInt(arrayEnd[1],10));
         	});
         });
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
            cy.get('input[name="tSelect"]').click();
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
    });

  
    describe('TodoList', () => {
        it('Checks delete button deletes stuff', () => {
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
                cy.get(`[id^=${me}]`).eq(1).click();
                cy.get(`[id^=${me}]`).should('not.exist');

            });
      
        });
        it('Checks check button', () => {
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
                cy.get(`[id^=${me}]`).eq(2).click();
                (cy.get(`[id^=${me}]`).eq(2)).should('not.exist');

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
