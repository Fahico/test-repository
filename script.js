
window.addEventListener("load", load, false);

var dataField, executeButton;

function load(){
	dataField = document.getElementById("dataField");
	executeButton = document.getElementById("execute");
	executeButton.addEventListener("click", executeAction, false);
}

function executeAction(){
	var myURL = "myText.txt";
	var request = new XMLHttpRequest();
	request.addEventListener("load", show, false);
	
	request.open("GET", myURL, true);
	/*El método "open()" se usa para abrir una nueva solicitud, el primer argumento especifíca la forma como se van a transmitir los datos al servidor, el segundo argumento especifica la URL solicitada, y el tercer argumento especifica si la solicitud es o no asíncrona...!*/
	
	request.send(null);
	/*El método "send()" se usa para enviar la solicitud al servidor, el argumento del método...*/
}

function show(e){
	dataField.innerHTML = e.target.responseText;
	/*El atributo "responseText" del objeto XMLHttpRequest contiene el texto de respuesta de la solicitud realizada al servidor...!*/
}
