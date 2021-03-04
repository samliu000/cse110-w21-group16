const res= require('../source/js/todo.js');
const mock_closeForm = jest.fn(res.closeForm);
const mock_openForm = jest.fn(res.openForm);
const mock_editRow = jest.fn(res.editRow);
const mock_checkFields = jest.fn(res.checkFields);
const mock_addTask = jest.fn(res.addTask);

	describe("Unit Test of closeForm", () => {

		test('Ensures that closeForm hides the div with id "addform"', () => {
			document.body.innerHTML =`<div id="add-form"></div>`;
			mock_closeForm();
			expect(mock_closeForm).toHaveBeenCalled();
			expect(document.getElementById('add-form').style.display).toEqual("none");
		});
	});
	describe("Unit Test of openForm", () => {

		test('Ensures that openForm makes the form visible', () => {
			document.body.innerHTML =`<div id="add-form"></div><body><div id="add-form"><input type="text" id="tName"></div>	
			<input type="text" placeholder="Enter Task Name" value=3 id="est" class="in-field" required></body>`;
			mock_openForm();
			expect(mock_openForm).toHaveBeenCalled();
			expect(document.getElementById('add-form').style.display).not.toEqual("none");
			expect(document.getElementById('add-form').style.display).not.toEqual("hidden");

		});
		test('Ensures that openForm puts default values empty string and 1', () => {
			document.body.innerHTML =`<body><div id="add-form"><input type="text" id="tName"></div>	
			<input type="text" placeholder="Enter Task Name" value=3 id="est" class="in-field" required></body>`;
			mock_openForm();
			expect(mock_openForm).toHaveBeenCalled();
			expect(document.getElementById('tName').value).toEqual('');
			expect(document.getElementById('est').value).toEqual('1');

		});
	describe("unit Test of editRow", () => {
		test('Ensures editRow deletes the row', () => {
			document.body.innerHTML =`<div id="grandparent"><div id=parent"> <i id = "child"></div>`;
			mock_editRow(document.getElementById('child'));
			expect(mock_openForm).toHaveBeenCalled();
			expect(document.getElementById('grandparent')).toBe(null);
		})
	})
	describe("Unit Tests of checkField, EST max = 50, TaskName nonempty", () => {
		test('Test normal  value', () => {
			document.body.innerHTML =`<table id="table-content"></table><input value="name" id="tName"><input value="10" id="est"><div class="add-popup" id="add-form"><div><input type="text" id="tName" value = "nonempty"></div>	
			<input type="text" placeholder="Enter Task Name" value=2 id="est" class="in-field" required>`;
			mock_checkFields();
			expect(mock_checkFields()).toBe(true);
			expect(mock_checkFields).toHaveBeenCalled();
		});

		test('Test extreme high value', () => {
				document.body.innerHTML =`<input type="text" id="tName"></div>	
				<input type="text" placeholder="Enter Task Name" value=33333 id="est" class="in-field" required>`;
				expect(mock_checkFields()).toBe(false);
				expect(mock_checkFields).toHaveBeenCalled();
			});
			test('Test extreme low value', () => {
				console.error = jest.fn();
				document.body.innerHTML =`<input type="text" id="tName"></div>	
				<input type="text" placeholder="Enter Task Name" value=-3333 id="est" class="in-field" required>`;
				expect(mock_checkFields()).toBe(false);
				expect(mock_checkFields).toHaveBeenCalled();
			});
	});

	describe("Unit Tests of addTask", () => {
		test('Test Creation of new radio', () => {
			document.body.innerHTML =`<table id="table-content"></table><input value="name" id="tName"><input value="10" id="est"><div class="add-popup" id="add-form"><div>`;
			mock_addTask();
			global.table = document.getElementById('table-content');
			expect(document.getElementsByName('tSelect')).not.toBe(null);
			expect(mock_addTask).toHaveBeenCalled();
		});
		test('Test creation of delte button', () => {
			document.body.innerHTML =`<table id="table-content"></table><input value="name" id="tName"><input value="10" id="est"><div class="add-popup" id="add-form"><div><input type="text" id="tName"></div>	
			<input type="text" placeholder="Enter Task Name" value=33333 id="est" class="in-field" required>`;
			mock_addTask();
			expect(document.getElementsByClassName("fa fa-trash")).not.toBe(null);
			expect(mock_addTask).toHaveBeenCalled();
		});
		test('Test creation of rows and columns', () => {
			console.error = jest.fn();
			document.body.innerHTML =`<table id="table-content"></table><input value="name" id="tName"><input value="10" id="est"><div class="add-popup" id="add-form"><div>`;
			mock_addTask();
			expect(mock_addTask).toHaveBeenCalled();
			expect(document.getElementById('table-content').rows[0].cells.length).toBe(5);
			expect(document.getElementById('table-content').rows[0].cells[1].innerText).toBe('name');
			expect(document.getElementById('table-content').rows[0].cells[2].innerHTML).toBe('10');

		});
	});

});


