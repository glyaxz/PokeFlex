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
	<br>
	<footer class="text-center text-white" style="background-color: #f1f1f1;">
		<!-- Grid container -->
		<div class="container pt-4">
			<!-- Section: Social media -->
			<section class="mb-4">
			<!-- Facebook -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-facebook-f"></i
			></a>

			<!-- Twitter -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-twitter"></i
			></a>

			<!-- Google -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-google"></i
			></a>

			<!-- Instagram -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-instagram"></i
			></a>

			<!-- Linkedin -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-linkedin"></i
			></a>
			<!-- Github -->
			<a
				class="btn btn-link btn-floating btn-lg text-dark m-1"
				href="#!"
				role="button"
				data-mdb-ripple-color="dark"
				><i class="fab fa-github"></i
			></a>
			</section>
			<!-- Section: Social media -->
		</div>
		<!-- Grid container -->

		<!-- Copyright -->
		<div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
			© 2020 Copyright:
			<a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
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
