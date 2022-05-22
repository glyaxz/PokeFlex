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

req.onload = function(){
	jsonResp = req.response;

}

function setGen(setGen){
	Gen = setGen;
	loadGen(Gen)
}

function loadGen(generation){
	$('pokeCards').empty();

	const pokedex = jsonResp['gen'+generation];

  	for (var i = 0; i < pokedex.length; i++) {
		const myArticle = document.createElement('article');
		const myH2 = document.createElement('h2');
		const myPara1 = document.createElement('p');
		const myPara2 = document.createElement('p');
		const myPara3 = document.createElement('p');
		const myPara4 = document.createElement('p');
		const myList = document.createElement('ul');

		myH2.textContent = pokedex[i].name;
		myPara1.textContent = 'Nombre: ' + pokedex[i].name;
		myPara2.textContent = 'Tipo: ' + pokedex[i].type;
		myPara3.textContent = 'Nivel inicial:' + pokedex[i].initial_level;
		myPara4.textContent = 'Fuerte contra:' + pokedes[i].strong_vs;


		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myList);

		section.appendChild(myArticle);
  	}
}