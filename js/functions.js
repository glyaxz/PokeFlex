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

	const pokedex = jsonResp['gen1'];

  	for (var i = 0; i < pokedex.length; i++) {
		const myArticle = document.createElement('article');
		const myPara1 = document.createElement('p');
		const myImg = document.createElement('img');
		const myPara2 = document.createElement('p');
		const myPara3 = document.createElement('p');
		const myPara4 = document.createElement('p');

		myArticle.classList = 'pokecard'
		myPara1.textContent = 'Nombre: ' + pokedex[i].name;
		myPara2.textContent = 'Tipo: ' + pokedex[i].type;
		myPara3.textContent = 'Nivel inicial:' + pokedex[i].initial_level;
		myPara4.textContent = 'Fuerte contra:' + pokedes[i].strong_vs;
		myImg.src = '/img/'+pokedex[i].name+'.png';
		myImg.width = 200;



		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myPara4);
		myArticle.appendChild(myImg);

		section.appendChild(myArticle);
  	}
}