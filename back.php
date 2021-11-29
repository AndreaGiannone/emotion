<?php

// this is prefectly rendable by jquery .load('url of this page');

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
header('Content-type: text/html');
?>

	<div class="col first-column">
	<?php for( $i=0; $i < count($column_a); $i++ ) { ?>
		<div class="primary-grid-<?php echo $i+1;echo $i % 2 == 0 ? ' odd': ' even'; ?>">
		<?php foreach ( $column_a[$i] as $key2 => $value2) { ?>
			<div class="secondary-grid"><?php echo $value2;?></div><?php } ?>
			<!-- <div class=separator><br></div> -->
			</div>
			<?php } ?>		
	</div>


