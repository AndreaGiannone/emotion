<?php

$trap_emotion_array=[];

$column_a= []; //0

$organs = [
	'Heart or Small Intestine'=>'odd-organ',
	'Spleen or Stomach'=>'even-organ',
	'Lung or Colon'=>'odd-organ',
	'Liver or Gail Bladder'=>'even-organ',
	'Kidneys or Bladder'=>'odd-organ',
	'Glands & Sexual Organs'=>'even-organ'

];

$row1a=['abandonment',	'betrayal',	'forlorn',	'lost',	'love unreceived'];	//0
$row2a=['anxiety',	'despair',	'disgust',	'nervousness',	'worry']; //1	
$row3a=['crying',	'discouragement',	'rejection',	'sadness',	'sorrow']; //2
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
	<link rel="stylesheet" href="<?php echo dirname($_SERVER['SCRIPT_NAME']);?>/css/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
  	<title>Trapped Emotion Chart</title>
</head>
<body>
	<div style="height:20px" class="chart-header"></div>
	<div class="container" style="text-align:center">
    	<div class="row">
    		<div class="col-3 query">
    			<?php //--------------------------first cycle---------------------- ?>
    			<div class ="tr-em">
    				<div style="">There is a trapped emotion</div>
		    		<button type="button" id="yes-tr-em" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em" class="btn btn-light">No</button>
		    		
				</div>
				<div class ="hide he-wa">
    				<div style="">There is a heart's wall</div>
		    		<button type="button" id="yes-he-wa" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-he-wa" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
				<div class ="hide hi-he-wa">
    				<div style="">There is a hidden heart's wall</div>
		    		<button type="button" id="yes-hi-he-wa" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-hi-he-wa" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
    			<?php //--------------------------column cycle---------------------- ?>
				<div class ="hide tr-em-1-col">
    				<div style="">The trapped emotion is in the first column</div>
		    		<button type="button" id="yes-tr-em-1-col" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em-1-col" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
	   			<?php //-------------------------cell cycle odd even--------------------------- ?>
				<div class ="hide tr-em-odd-even">
    				<div style="">The trapped emotion is in the odd cells</div>
		    		<button type="button" id="yes-tr-em-odd" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em-odd" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
	   			<?php //-------------------------cell cycle each cell--------------------------- ?>
				<div class ="hide tr-em-each">
    				<div style="">The trapped emotion is in the first top cell</div>
		    		<button type="button" id="yes-tr-em-each" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em-each" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
				<div class ="hide tr-em-each2">
    				<div style="">The trapped emotion is in the top cell</div>
		    		<button type="button" id="yes-tr-em-each2" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em-each2" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>

<?php //------------------------------------------------emotion cycle----------------------------- ?>
				<div class ="hide tr-em-emotion">
    				<div style="">The trapped emotion is a pulsing cell</div>
		    		<button type="button" id="yes-tr-em-emotion" class="btn btn-light">Yes</button>
		    		<button type="button" id="no-tr-em-emotion" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>

				<div class ="hide three-last">
    				<div style="">The trapped emotion is the first in the cell</div>
		    		<button type="button" id="three-last-yes" class="btn btn-light">Yes</button>
		    		<button type="button" id="three-last-no" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>

				<div class ="hide last-cycle">
    				<div style="">The trapped emotion is the first in the cell</div>
		    		<button type="button" id="last-cycle-yes" class="btn btn-light">Yes</button>
		    		<button type="button" id="last-cycle-no" class="btn btn-light">No</button>
		    		<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>



				<div class ="hide free-em">
					<div style="">You don't have any trapped emotion</div>
					<button type="button" id="back-chart" class="btn btn-light"><a href="/emotions/"><-back</a></button>
				</div>
    		</div>
	    	<div class="col organs">
			<?php foreach( $organs as $organ => $odd_or_even ) { ?>	
      			<div style="" class="secondary-grid<?php echo ' '. $odd_or_even; ?>"><div class="odd-or-even-row" style=""><?php echo $organ; ?></div></div>
      		<?php } ?> 				
	    	</div>
	    	<div class="col first-column">
    		<?php for( $i=0; $i < count($column_a); $i++ ) { ?>
    			<div class="primary-grid-<?php echo $i+1; echo $i % 2 == 0 ? ' odd': ' even'; ?>">
	    		<?php foreach ( $column_a[$i] as $key2 => $value2) { ?>
      			<div class="secondary-grid_<?php echo ' '.$key2 + 1; ?>"><?php echo $value2;?></div><?php } ?>
      			<!-- <div class=separator><br></div> -->
      			</div>
      			<?php } ?>
	    	</div>
	    	<div class="col second-column">
    		<?php for( $i=0; $i < count($column_b); $i++ ) { ?>
    			<div class="primary-grid-<?php echo $i+1;echo $i % 2 == 0 ? ' odd': ' even'; ?>">
	    		<?php foreach ( $column_b[$i] as $key2 => $value2) { ?>
      			<div class="secondary-grid_<?php echo ' '.$key2 + 1; ?>"><?php echo $value2;?></div><?php } ?>
      			<!-- <div class=separator><br></div> -->
      			</div>
      			<?php } ?>		
	    	</div>
	    </div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/script.js" type="text/javascript"></script>
	<script src="js/pulsate.js" type="text/javascript"></script>
	<script src="js/functions.js" type="text/javascript"></script>
</body>
</html>




