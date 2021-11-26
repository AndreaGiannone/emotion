<?php

$trap_emotion_array=[];

$column_a= []; //0

$organs = [
	'Heart or Small Intestine',
	'Spleen or Stomach',
	'Lung or Colon',
	'Liver or Gail Bladder',
	'Kidneys or Bladder',
	'Glands & Sexual Organs'

];

$row1a=['abandonment',	'betrayal',	'forlorn',	'lost',	'love unreceived'];	//0
$row2a=['anxiety',	'despair',	'disgust',	'nervousness',	'worry']; //1	
$row3a=['crying',	'discouragement',	'regection',	'sadness',	'sorrow']; //2
$row4a=['anger',	'bitterness',	'guilt',	'hatred',	'resentment']; //3	
$row5a=['blaming',	'dread',	'fear',	'horror',	'peeved'];	//4
$row6a=['humilation',	'jealousy',	'longing',	'lust',	'overhelm']; //5

$column_b = [];//1

$row1b=['effort unreceived',	'heartache',	'insecurity',	'overjoy',	'vulnerability']; //0
$row2b=['failure',	'helplessness',	'hopelessness',	'lack of control',	'low self-esteem']; //1
$row3b=['confusion',	'defensiveness',	'grief',	'self-abuse',	'stubborness']; //2
$row4b=['depression',	'frustration',	'indecisiveness',	'panic',	'taken for granted']; //3
$row5b=['conflict',	'creative insecurity',	'terror',	'unsupported',	'wishy washy']; //4
$row6b=['pride',	'shame',	'shock',	'unworthy',	'worthless']; //5

$column_a = [$row1a,$row2a,$row3a,$row4a,$row5a,$row6a];
$column_b = [$row1b,$row2b,$row3b,$row4b,$row5b,$row6b];

$trap_emotion_array=[$column_a,$column_b];



//print_r($trap_emotion_array);
//echo $trap_emotion_array[0][0][0];

// first condition 0 or 1 $stage1

// second condition 0,2,4 = grey or 1,3,5 white $stage2

// third condition $stage3

// fourth condition $stage4

?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
  	<title>Trapped Emotion Chart</title>
</head>
<body>
	<div class="chart-header">chart</div>
	<div class="container" style="text-align:center">
    	<div class="row">
    		<div class="col-3 query">
    			<div class ="question">
    				<div style="height: 40px;">There is a trapped emotion</div>
		    		<button type="button" id="yes-tr-em" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em" class="btn btn-light">No</button>
		    		<button type="button" id="back" class="btn btn-light"><-back</button>
				</div>
				<div class ="hide he_wa">
    				<div style="height: 40px;">There is a heart's wall</div>
		    		<button type="button" id="yes-he-wa" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-he-wa" class="btn btn-light">No</button>
		    		<button type="button" id="back-he-wa" class="btn btn-light"><-back</button>
				</div>
				<div class ="hide hi_he_wa">
    				<div style="height: 40px;">There is a hidden heart's wall</div>
		    		<button type="button" id="yes-hi-he-wa" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-hi-he-wa" class="btn btn-light">No</button>
		    		<button type="button" id="back-hi-he-wa" class="btn btn-light"><-back</button>
				</div>
				<div class ="hide free">
				</div>
    		</div>
	    	<div class="col organs">
			<?php foreach( $organs as $organ ) { ?>	
      			<div style="height: 122.4px;" class="secondary-grid"><div class="organ-row" style=""><?php echo $organ; ?></div></div>
      		<?php } ?> 				
	    	</div>
	    	<div class="col first-column">
    		<?php for( $i=0; $i < count($column_a); $i++ ) { ?>
    			<div class="primary-grid-<?php echo $i+1; echo $i % 2 == 0 ? ' odd': ' even'; ?>">
	    		<?php foreach ( $column_a[$i] as $key2 => $value2) { ?>
      			<div class="secondary-grid"><?php echo $value2;?></div><?php } ?>
      			<!-- <div class=separator><br></div> -->
      			</div>
      			<?php } ?>
	    	</div>
	    	<div class="col second-column">
    		<?php for( $i=0; $i < count($column_b); $i++ ) { ?>
    			<div class="primary-grid-<?php echo $i+1;echo $i % 2 == 0 ? ' odd': ' even'; ?>">
	    		<?php foreach ( $column_b[$i] as $key2 => $value2) { ?>
      			<div class="secondary-grid"><?php echo $value2;?></div><?php } ?>
      			<!-- <div class=separator><br></div> -->
      			</div>
      			<?php } ?>		
	    	</div>
	    </div>
	</div>
	<script src="js/functions.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/script.js" type="text/javascript"></script>
</body>
</html>




