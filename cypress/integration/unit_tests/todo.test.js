describe('Test Add Button', () => {
	it('Check that the addTask function is run on click', () => {
		cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#btn-add').click().then(() =>{ 
			cy.get('#table-content').contains('td', 'test');
		});

	});
});
describe('Test Input Exptected Filter', () => {
	it('Check that the adding forbidden letter + is rejected', () => {
		cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#est').invoke("val", '+');
		cy.get('#btn-add').click().then(() =>{ 
			expect(cy.get('#est').val).to.equal(undefined)
		});
	});



	});
	it('Check that the adding forbidden letter - is rejected', () => {
		cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#est').invoke("val", '-');
		cy.get('#btn-add').click().then(() =>{ 
			expect(cy.get('#est').val).to.equal(undefined)
		});


	});
	it('Check that the adding forbidden letter e is rejected', () => {
		cy.visit('/source/index.html');
		cy.get('#add-task').click();
		cy.get('#tName').invoke("val","test");
		cy.get('#est').type('e1');
		cy.get('#btn-add').click().then(() =>{ 
			expect(cy.get('#est').val).to.equal(undefined)
		});


	});

	describe('Test Enter/ESC Button for TaskName', () => {
		it('Check that the addTask function is run on enter', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test")
			cy.get('#tName').invoke("val","test").type('{enter}');
			cy.get('#table-content').contains('td', 'test');
	
		});
		it('Check that the addTask function is run on esc', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test").type('{esc}');
			cy.get("#add-form").should('have.attr', 'style', 'display: none;')
	
		});
	});
	describe('Test Enter/ESC Button for Estimate', () => {
		it('Check that the est function is run on enter', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test");
			cy.get('#est').invoke("val", 2).type('{enter}');
			cy.get('#table-content').contains('td', 'test');
	
		});
		it('Check that the addTask function is run on esc', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test");
			cy.get('#est').invoke("val", 2).type('{esc}');
			cy.get("#add-form").should('have.attr', 'style', 'display: none;')
		});
	});
	describe('Test Local Storage', () => {
		it('should save my tname and expected', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test");
			cy.get('#est').invoke("val", 2).type('{enter}');
			cy.get('#table-content').contains('td', 'test');
			cy.get('#add-task').click();
			cy.reload();
			cy.get('#table-content').contains('td', 'test');
	});
});

	describe('Test Done Button and Local Storage', () => {
		it('should save my tname and expected', () => {
			cy.visit('/source/index.html');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test");
			cy.get('#est').invoke("val", 2).type('{enter}');
			cy.get('#table-content').contains('td', 'test');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test2");
			cy.get('#est').invoke("val", 3).type('{enter}');
			cy.get('#table-content').contains('td', 'test2');
			cy.get('#add-task').click();
			cy.get('#tName').invoke("val","test3");
			cy.get('#est').invoke("val", 4).type('{enter}');
			cy.get('#table-content').contains('td', 'test2');
			cy.get('*[class^="fa fa-check-square"]').first().click();
			cy.get('*[class^="fa fa-check-square"]').eq(2).click();
			cy.reload(true);
			cy.get('#table-content').contains('td', 'test');
	});
});
