<?php

$result = [

	'error' => array(),
	'output' => 'no_data'

];

$get= $_GET['choice'] ?? '';
if ($get){

	//tr_em
	header('Content-type: application/json');
	$result['output'] = 'There is a heart wall';
	echo json_encode($result,true);
	exit;

} else {

	echo json_encode($result,true);
	exit;

}

?>