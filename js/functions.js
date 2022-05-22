const header = document.querySelector('header');
const section = document.querySelector('section');
let Gen=1

var data = new FormData();
data.append('json_url','http://127.0.0.1/api/pokedex.api');

let req = XMLHttpRequest();
req.open('POST', '127.0.0.1', false);
req.responsiveType = 'json';
req.send(data);

function makeRequest(){
	req.onload = function(){
		req.responsiveType="json"
		jsonResp = $.parse(req.response);
		for(let i = 0; i<jsonResp[Gen-1].length; i++){
			console.log(111)
		}
	}
}

function setGen(setGen){
	Gen = setGen;
	console.log(Gen);
}