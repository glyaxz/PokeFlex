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

	<section>
		<div class="menu">
			<div>
				<button class="genBtn" onclick=setGen(1)>Generation 1</button>
				<button class="genBtn" onclick=setGen(2)>Generation 2</button>
				<button class="genBtn" onclick=setGen(3)>Generation 3</button>
			</div>
		</div>

		<div id="pokeCards" class="pokecards">
			<!-- Aqui se introduciran via JS las cartas dependiendo la gen que se escoja -->
		</div>

	</section>

	<footer class="bg-light text-center text-white">
		<!-- Grid container -->
		<div class="container p-4 pb-0">
			<!-- Section: Social media -->
			<section class="mb-4">
			<!-- Facebook -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #3b5998;"
				href="#!"
				role="button"
				><i class="fab fa-facebook-f"></i
			></a>

			<!-- Twitter -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #55acee;"
				href="#!"
				role="button"
				><i class="fab fa-twitter"></i
			></a>

			<!-- Google -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #dd4b39;"
				href="#!"
				role="button"
				><i class="fab fa-google"></i
			></a>

			<!-- Instagram -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #ac2bac;"
				href="#!"
				role="button"
				><i class="fab fa-instagram"></i
			></a>

			<!-- Linkedin -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #0082ca;"
				href="#!"
				role="button"
				><i class="fab fa-linkedin-in"></i
			></a>
			<!-- Github -->
			<a
				class="btn btn-primary btn-floating m-1"
				style="background-color: #333333;"
				href="#!"
				role="button"
				><i class="fab fa-github"></i
			></a>
			</section>
			<!-- Section: Social media -->
		</div>


		<!-- Copyright -->
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
			© 2020 Copyright:
			<a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
		</div>
		<!-- Copyright -->
		</footer>
	<script src="js/functions.js"></script>
	<script src="js/jq.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<?php

?>
