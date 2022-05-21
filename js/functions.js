const header = document.querySelector('header');
const section = document.querySelector('section');
let Gen=1

function makeRequest(url){
	var data = new FormData();
	data.append('json_url','http://127.0.0.1/pokedex.api');

	let req = XMLHttpRequest();
	req.open('POST', url, true);
	req.responsiveType = 'json';
	req.send(data);

	req.onload = function(){
		req.responsiveType="json"
		jsonResp = $.parse(req.response);
	}
}

function setGen(setGen){
	Gen = setGen;
	console.log(Gen);
}