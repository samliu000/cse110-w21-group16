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

