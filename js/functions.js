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
	clearCards();
	const pokedex = JSON.parse(json);
	let div;
  	for (var i = 1; i < 5; i++) {
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

		myDiv.className = 'pokecard-individual';
		myDiv.id = 'card'+i;
		myPara1.textContent = 'Nombre: ' + pokedex['gen'+generation][i].name;
		myPara2.textContent = 'Tipo: ' + pokedex['gen'+generation][i].type;
		myPara3.textContent = 'Nivel inicial: ' + pokedex['gen'+generation][i].initial_level;
		myPara4.textContent = 'Fuerte contra: ' + pokedex['gen'+generation][i].strong_vs;
		myImg.src = '/img/'+pokedex['gen'+generation][i].name+'.png';
		myImg.width = 50;

		document.getElementById('pokeCards').appendChild(myDiv);
		// myDiv.addEventListener('onclick', OpenModal(myDiv))
		div=myDiv
	}

	let botones = document.getElementsByClassName('pokecard-individual')
	for (let i = 1; i <= botones.length; i++) {
		let btn = document.getElementById("card"+i)
		btn.addEventListener('click', OpenModal("card"+i))
	}

}
function clearCards(){
	section.innerHTML = "";
}

// Pop Up
function OpenModal(id) {
	// let info = 
	let element = document.getElementById('overlay');
	element.style.display = 'block'
}
function CloseModal(){
	let element = document.getElementById('overlay')
	element.style.display = 'none';
}
