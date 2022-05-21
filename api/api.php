<?php
function getJSON(){
	$json = $_POST["json_url"];
	$json_info = json_decode($json);
	$json_file = json_encode($json_info);
	return $json_file;
}
?>