const header = document.querySelector('header');
const section = document.getElementById('pokeCards');
let Gen=1
let jsonResp

// var data = new FormData();
// data.append('json_url','http://127.0.0.1/api/pokedex.api');

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

	const pokedex = JSON.parse(json);

  	for (var i = 1; i < 4; i++) {
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

		myDiv.className = 'pokecard';
		myDiv.id = 'card'+i;
		myPara1.textContent = 'Nombre: ' + pokedex['gen'+generation][i].name;
		myPara2.textContent = 'Tipo: ' + pokedex['gen'+generation][i].type;
		myPara3.textContent = 'Nivel inicial:' + pokedex['gen'+generation][i].initial_level;
		myPara4.textContent = 'Fuerte contra:' + pokedex['gen'+generation][i].strong_vs;
		myImg.src = '/img/'+pokedex['gen'+generation][i].name+'.png';
		myImg.width = 200;

		document.getElementById('pokeCards').appendChild(myDiv)
		
  	}




}

// function clearCards(){
// 	section.removeChild()
// }