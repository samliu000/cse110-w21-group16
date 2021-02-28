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
		document.body.innerHTML =`<div id="add-form"></div>`;
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
		test('Test extreme high value', () => {
			document.body.innerHTML =`<input type="text" id="tName"></div>	
			<input type="text" placeholder="Enter Task Name" value=100 id="est" class="in-field" required>`;
			mock_checkFields();
			expect(mock_checkFields).toHaveBeenCalled();
			expect(mock_addTask).toHaveBeenCalledTimes(0);
		});

		test('Test extreme high value', () => {
				document.body.innerHTML =`<input type="text" id="tName"></div>	
				<input type="text" placeholder="Enter Task Name" value=2 id="est" class="in-field" required>`;
				mock_checkFields();
				expect(mock_checkFields).toHaveBeenCalled();
				expect(mock_addTask).toHaveBeenCalledTimes(1);
			});
	});
});


