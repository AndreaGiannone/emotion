<?php

$result = [

	'error' => array(),
	'output' => 'no_data',
	'set_invisible' => 'no_data'

];

$get= $_GET['choice'] ?? '';

switch ($get) {

//-------------------------------------------------------FIRST CYCLE--------------------------------------------------
	case 'yes_tr_em':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the first column';
		echo json_encode($result,true);
		exit;		
		break;
	case 'no_tr_em':
		header('Content-type: application/json');
		$result['output'] = 'There is a heart wall';
		echo json_encode($result,true);
		exit;
		break;
	case 'yes_he_wa':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the first column';
		echo json_encode($result,true);
		exit;		
		break;
	case 'no_he_wa':
		header('Content-type: application/json');
		$result['output'] = 'There is a hidden heart wall';
		echo json_encode($result,true);
		exit;
		break;
	case 'yes_hi_he_wa':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the first column';
		echo json_encode($result,true);
		exit;		
		break;
	case 'no_hi_he_wa':
		header('Content-type: application/json');
		$result['output'] = 'There are no trapped emotion';
		echo json_encode($result,true);
		exit;
		break;
//-------------------------------------------------------COL CYCLE--------------------------------------------------
	case 'yes_tr_em_1_col':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the odd cells';
		echo json_encode($result,true);
		exit;
		break;
	case 'no_tr_em_1_col':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the odd cells';
		echo json_encode($result,true);
		exit;
		break;
	case 'yes-tr-em-odd':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the first cell';
		echo json_encode($result,true);
		exit;
		break;
	case 'no-tr-em-odd':
		header('Content-type: application/json');
		$result['output'] = 'The trapped emotion is in the first cell';
		echo json_encode($result,true);
		exit;
		break;
	default:
		header('Content-type: application/json');
		echo json_encode($result,true);
		exit;
		break;
}

// if ($get == 'no_tr_em'){

// 	//tr_em
// 	header('Content-type: application/json');
// 	$result['output'] = 'There is a heart wall';
// 	echo json_encode($result,true);
// 	exit;

// } else {
// 	header('Content-type: application/json');
// 	echo json_encode($result,true);
// 	exit;

// }

?>