<?php
function getJSON(){
	$json = $_POST["json_url"];
	$json_info = json_decode($json);
	$json_file = json_encode($json_info);
	return $json_file;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="css/styles.css">
</head>

<body>
	<header>
		<div class="menu">
			<div>
				<button class="genBtn" onclick=setGen(1)>Generation 1</button>
				<button class="genBtn" onclick=setGen(2)>Generation 2</button>
				<button class="genBtn" onclick=setGen(3)>Generation 3</button>
			</div>
		</div>
	</header>
	<section>

	</section>
	<script src="js/functions.js"></script>
	<script src="js/jq.js"></script>
</body>
</html>
<?php

?>
