const header = document.querySelector('header');
const section = document.querySelector('section');
let Gen=1

// var data = new FormData();
// data.append('json_url','http://127.0.0.1/api/pokedex.api');

const req = XMLHttpRequest();
req.open('GET', 'localhost/api/pokedex.json', false);
req.responsiveType = 'json';
req.send();

req.onload = function(){
	jsonResp = $.parse(req.response);
	for(let i = 0; i<jsonResp[Gen-1].length; i++){
		console.log(111)
	}
}

function setGen(setGen){
	Gen = setGen;
	console.log(Gen);
}