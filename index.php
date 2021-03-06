<?php
// function getJSON(){
// 	$json = $_POST["json_url"];
// 	$json_info = json_decode($json);
// 	$json_file = json_encode($json_info);
// 	return $json_file;
// }
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="icon" href="favicon.png" type="image/png">
</head>

<body>
	<header>
		<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
			<a class="navbar-brand">Javier Garc&iacute;a</a>
		</nav>
	</header>

	<div class="cabecera"> 
		<h1>
			Pokédex
		</h1>
		<br>
		<h4>
			Por Javier Garc&iacute;a
		</h4>
	</div>

	<div class="overlay" id="overlay">
      <div class="popup">
        <div id="popupInfo" class="popupInfo">

		</div>
      </div>
    </div>

	<section>
		<div class="menu">
			<div>
				<button class="genBtn" onclick=setGen(1)>Generation 1</button>
				<button class="genBtn" onclick=setGen(2)>Generation 2</button>
				<button class="genBtn" onclick=setGen(3)>Generation 3</button>
			</div>
		</div>

		<div id="pokeCards" class="pokecard">
			<!-- Aqui se introduciran via JS las cartas dependiendo la gen que se escoja -->
		</div>

	</section>
	<br>

	<footer class="text-center text-white" style="background-color: #f1f1f1;">

		<div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
			Hecho por Javier Garcia Ruiz:
			<br>
			<a class="text-dark" href="https://www.github.com/glyaxz/PokeFlex">Enlace al repositorio en GitHub</a>
		</div>
		</footer>

	<script src="js/functions.js"></script>
	<script src="js/jq.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<?php
//Hecho por Javier 'glyaxz' Garcia Ruiz
?>
