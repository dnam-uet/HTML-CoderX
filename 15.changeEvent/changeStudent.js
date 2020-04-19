var students = [
	{name: 'Nam', age : 20},
	{name: 'A', age: 19},
	{name: 'B', age:18}
];

function render(students){
	// get id table
	var tableStudent = document.getElementById('tableStudent');
	// filter list
	var listStudent = students.map(function(student){
		return '<tr><td>' + student.name + '</td><td>' + student.age + '</td></tr>';
	});

	tableStudent.innerHTML = listStudent.join('');
	// reder it
	var changeStudent = document.getElementById('changeStudent');
	changeStudent.addEventListener('change',onChangeStudent);
}

function onChangeStudent(){
	// get current age 
	var age = changeStudent.value;
	console.log(age);
	age = parseInt(age);
	// filter list student
	var resultStudent = students.filter(function(student){
		return student.age === age;
	});
	// render
	render(resultStudent);
}

render(students);