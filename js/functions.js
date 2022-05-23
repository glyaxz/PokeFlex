const header = document.querySelector('header');
const section = document.getElementById('pokeCards');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
let Gen=1
let jsonResp

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

		document.getElementById('pokeCards').appendChild(myDiv)
		div=myDiv
	}

	popup.appendChild(div)

	div.addEventListener('click', () => {
		popup.style.display = 'block';
	});
	 
	close.addEventListener('click', () => {
		popup.style.display = 'none';
	});
	 
	popup.addEventListener('click', e => {
		// console.log(e);
		if(e.target.className === 'popup-wrapper') {
			popup.style.display = 'none';
		}
	});

}

function clearCards(){
	section.innerHTML = "";
}

// Pop Up

