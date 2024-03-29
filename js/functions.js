const header = document.querySelector('header');
const section = document.getElementById('pokeCards');
const popupInfo = document.getElementById('popupInfo');
let Gen=1
let jsonResp
let div

const req = new XMLHttpRequest();
req.open('GET', '/api/pokedex.json', false);
req.responsiveType = 'json';
req.send();
jsonResp = req.response;

function setGen(setGen){
	Gen = setGen;
	loadGen(Gen,jsonResp)
}

loadGen(Gen,jsonResp)

function loadGen(generation,json){
	divCleaner(section)
	const pokedex = JSON.parse(json);
	
	let div;
  	for (var i = 1; i < Object.keys(pokedex["gen"+generation]).length+1; i++) {
		const myDiv = document.createElement('div');
		const myPara1 = document.createElement('p');
		const myImg = document.createElement('img');
		const myPara2 = document.createElement('p');
		const myPara3 = document.createElement('p');
		const myPara4 = document.createElement('p');

		myDiv.appendChild(myPara1);
		myDiv.appendChild(myPara2);
		myDiv.appendChild(myPara3);
		myDiv.appendChild(myPara4);
		myDiv.appendChild(myImg);
// Añadir los listener de forma que al clickar individualmente saque por consola el log
		myDiv.className = 'pokecard-individual';
		myDiv.id = 'card'+i;
		myPara1.textContent = 'Nombre: ' + pokedex['gen'+generation][i].name;
		myPara2.textContent = 'Tipo: ' + pokedex['gen'+generation][i].type;
		myPara3.textContent = 'Nivel inicial: ' + pokedex['gen'+generation][i].initial_level;
		myPara4.textContent = 'Fuerte contra: ' + pokedex['gen'+generation][i].strong_vs;
		myImg.src = '/img/'+pokedex['gen'+generation][i].name+'.png';
		myImg.width = 50;
		document.getElementById('pokeCards').appendChild(myDiv);
	}
	loadListeners();
}

// Pop Up
function OpenModal(id) {
	let element = document.getElementById('overlay');
	let closeBtn = document.createElement('button');
	let btnid=document.getElementById(id);
	let btnCloned = btnid.cloneNode(true);
	closeBtn.textContent = "X";
	closeBtn.id = 'closeBtn'
	closeBtn.className = "xBtn"
	btnCloned.className = 'popupCard';
	closeBtn.addEventListener('click',function(){
		let element2 = document.getElementById('overlay');
		let element3 = document.getElementById('popupInfo');
		element2.style.visibility = 'hidden';
		divCleaner(element3);
	});
	popupInfo.appendChild(closeBtn);
	popupInfo.appendChild(btnCloned);

	//  <div onclick="CloseModal()" class="CloseIcon">&#10006;</div>
	element.style.visibility = 'visible';
}

function loadListeners(){
	let btns = document.getElementsByClassName('pokecard-individual');
	for(let i = 0; i < btns.length; i++){
		btns[i].addEventListener('click',function(){
			let id = btns[i].getAttribute('id');
			OpenModal(id);
		})
	}
}

function divCleaner(divToClean){
	divToClean.innerHTML = ""
}


//Hecho por Javier 'glyaxz' Garcia Ruiz