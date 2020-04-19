var storageKey = 'elements';


// get data from localStorage
var dataStorage = localStorage.getItem(storageKey);


// Set value to array elements
var elements;
if(dataStorage === null) elements = [];
else elements = JSON.parse(dataStorage);	


// Reference to id = "list__item"
var listItem = document.getElementById('list__item');

// Add event onclick to button
var eventBtn = document.getElementById('addBtn');
eventBtn.addEventListener('click',addElement);

function addElement(){
	// Get value from input field
	var newItem = document.getElementById('new__item');
	var content = newItem.value;
	// Push value to elements
	elements.push(content);
	// render file HTML
	render();

	localStorage.setItem(storageKey,JSON.stringify(elements));
}


//Render value of HTML file
function render(){
	var display = elements.map(function(element){
		return "<li>" + element + "</li>";
	});

	listItem.innerHTML = display.join('');
}
render();