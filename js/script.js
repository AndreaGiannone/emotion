
var $even_hidden = false;
var $last_chosen_odd = false;

$(document).ready(function(){
//------------------------------------------FIRST CYCLE------------------------------------------------------------
//--------------------------------tr-em---------------------------
	$('#yes-tr-em').click(function(event) {

		GetURL("/queries.php?choice=yes_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.tr-em').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');


		});
	});

	$('#no-tr-em').click(function(event) {

		GetURL("/queries.php?choice=no_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em', $result_tr_em);
			$('.tr-em').addClass('hide');
			$('.he-wa').removeClass('hide');
			query_font('25px');


		});
	});

//-----------------------------------he-wa----------------------------
	$('#yes-he-wa').click(function(event) {

		GetURL("/queries.php?choice=yes-he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-he-wa', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.he-wa').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');
			//to do visibility button

		});
	});

	$('#no-he-wa').click(function(event) {

		GetURL("/queries.php?choice=no_he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-he-wa', $result_tr_em);
			$('.he-wa').addClass('hide');
			$('.hi-he-wa').removeClass('hide');
			query_font('25px');


		});
	});

//-----------------------------------hi-he-wa----------------------------
	$('#yes-hi-he-wa').click(function(event) {

		GetURL("/queries.php?choice=yes-hi-he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-hi-he-wa', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.hi-he-wa').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');
			//to do visibility button

		});
	});

	$('#no-hi-he-wa').click(function(event) {

		GetURL("/queries.php?choice=free-em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-hi-he-wa', $result_tr_em);
			$('.hi-he-wa').addClass('hide');
			$('.free-em').removeClass('hide');
			query_font('25px');


		});
	});

//----------------------------------------------------------COL CYCLE------------------------------------------------------------


	$('#yes-tr-em-1-col').click(function(event) {

		GetURL("/queries.php?choice=yes_tr_em_1_col","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em-1-col', $result_tr_em);
			unhighlight_column('first-column', $result_tr_em);
			$('.second-column').addClass('hide');
			$('.tr-em-1-col').addClass('hide');
			$('.tr-em-odd-even').removeClass('hide');

		});
	});
	$('#no-tr-em-1-col').click(function(event) {

		GetURL("/queries.php?choice=no_tr_em_1_col","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em-1-col', $result_tr_em);
			//highlight_column('first-column', $result_tr_em);
			$('.first-column').addClass('hide');
			$('.tr-em-1-col').addClass('hide');
			$('.tr-em-odd-even').removeClass('hide');

		});
	});	

//--------------------------------------------------------CELL CYCLE-----------------------------------------------------


//----------------------------------------------------ODD EVEN ----------------------------------
	$('#yes-tr-em-odd').click(function(event) {

		GetURL("/queries.php?choice=yes-tr-em-odd","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em-odd', $result_tr_em);

			$even_hidden = true;
			$('.even').addClass('hide');
			$('.odd').css('background-color','powderblue');
			$('.even-organ').addClass('hide');
			$('.tr-em-each').removeClass('hide');
			$('.tr-em-odd-even').addClass('hide');

		});
	});

	$('#no-tr-em-odd').click(function(event) {

		GetURL("/queries.php?choice=no-tr-em-odd","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em-odd', $result_tr_em);
			//highlight_column('first-column', $result_tr_em);
			$('.odd').addClass('hide')
			$('.even').css('background-color','#8be6f1');
			$('.odd-organ').addClass('hide');
			$('.tr-em-each').removeClass('hide');
			$('.tr-em-odd-even').addClass('hide');
			
		});
	});

//---------------------------------------------EACH CYLCE------------------

//----------------normal--------------------------------------

    

		$('#yes-tr-em-each').click(function(event) {

			GetURL("/queries.php?choice=yes-tr-em-each","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-each', $result_tr_em);
				if ($even_hidden){

					$('.tr-em-each').addClass('hide');
					$('.primary-grid-3').addClass('hide');
					$('.primary-grid-5').addClass('hide');
					$('.organs div:nth(8)').addClass('hide');
					$('.organs div:nth(4)').addClass('hide');
					$('.tr-em-emotion').removeClass('hide');

				}else{

					$('.tr-em-each').addClass('hide');
					$('.primary-grid-4').addClass('hide');
					$('.primary-grid-6').addClass('hide');
					$('.organs div:nth(7)').addClass('hide');
					$('.organs div:nth(10)').addClass('hide');
					$('.tr-em-emotion').removeClass('hide');					
				}

			});
		});

		$('#no-tr-em-each').click(function(event) {

			GetURL("/queries.php?choice=no-tr-em-each","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('no-tr-em-each', $result_tr_em);

			if($even_hidden) {

				$('.tr-em-each').addClass('hide');
				$('.primary-grid-1').addClass('hide');
				$('.organs div:nth(0)').addClass('hide');
				$('.tr-em-each2').removeClass('hide');

			}else{

				$('.tr-em-each').addClass('hide');
			    $('.primary-grid-2').addClass('hide');
				$('.organs div:nth(3)').parent().addClass('hide'); ////check
				$('.tr-em-each2').removeClass('hide');

			}


			});
		});

		$('#yes-tr-em-each2').click(function(event) {

			GetURL("/queries.php?choice=yes-tr-em-each2","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('no-tr-em-each', $result_tr_em);

				if($even_hidden){

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-5').addClass('hide');
					$('.organs div:nth(8)').addClass('hide');
					$('.tr-em-emotion').removeClass('hide');

				}else{

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-6').addClass('hide');
					$('.organs div:nth(10)').css('display','none');
					$('.tr-em-emotion').removeClass('hide');

				}


			});
		});

		$('#no-tr-em-each2').click(function(event) {

			GetURL("/queries.php?choice=no-tr-em-each2","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('no-tr-em-each', $result_tr_em);

				if($even_hidden){

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-3').addClass('hide');
					$('.organs div:nth(4)').addClass('hide');
					$('.tr-em-emotion').removeClass('hide');

				}else{

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-4').addClass('hide');
					$('.organs div:nth(7)').parent().css('display','none');
					$('.tr-em-emotion').removeClass('hide');

				}	

			});
		});

//---------------------------------------------EMOTION----------------------------------------

		$('#yes-tr-em-emotion').click(function(event) {

			GetURL("/queries.php?choice=yes-tr-em-emotio","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-emotion', $result_tr_em);

				$last_chosen_odd = true;

				$('.secondary-grid_1').addClass('last-chosen-1');
				$('.secondary-grid_2').addClass('hide');
				$('.secondary-grid_3').addClass('last-chosen-2');								
				$('.secondary-grid_4').addClass('hide');				
				$('.secondary-grid_5').addClass('last-chosen-3');
				$('.tr-em-emotion').addClass('hide');
				$('.three-last').removeClass('hide');

			});
		});

		$('#no-tr-em-emotion').click(function(event) {

			GetURL("/queries.php?choice=no-tr-em-emotio","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-emotion', $result_tr_em);

				$('.secondary-grid_1').addClass('hide');
				$('.secondary-grid_2').addClass('last-chosen-1');
				$('.secondary-grid_3').addClass('hide');								
				$('.secondary-grid_4').addClass('last-chosen-2');				
				$('.secondary-grid_5').addClass('hide');
				$('.tr-em-emotion').addClass('hide');
				$('.last-cycle').removeClass('hide');


			});
		});

		$('#three-last-yes').click(function(event) {

			GetURL("/queries.php?choice=three-last-yes","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('three-last-yes', $result_tr_em);

				$('.last-chosen-2').addClass('hide');
				$('.last-chosen-3').addClass('hide');
				$('.three-last').html('<div>you can free the this emotion</div>');
				$('.last-chosen-1').css('font-size','30px');
			});
		});

		$('#three-last-no').click(function(event) {

			GetURL("/queries.php?choice=three-last-no","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('three-last-no', $result_tr_em);

				$('.last-cycle').removeClass('hide');
				$('.three-last').addClass('hide');
				$('.last-chosen-1').addClass('hide');

			});
		});

		$('#last-cycle-yes').click(function(event) {

			GetURL("/queries.php?choice=last-cycle-yes","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('last-cycle-yes', $result_tr_em);

				if($last_chosen_odd){

					$('.last-chosen-3').addClass('hide');
					$('.last-cycle').html('<div>you can free this emotion</div>');
					$('.last-chosen-2').css('font-size','30px');

				}else{

				    $('.last-chosen-2').addClass('hide');
				    $('.last-cycle').html('<div>you can free this emotion</div>');
				    $('.last-chosen-1').css('font-size','30px');
				    
			}	

			});


		});

		$('#last-cycle-no').click(function(event) {

			GetURL("/queries.php?choice=last-cycle-no","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('last-cycle-no', $result_tr_em);

				if($last_chosen_odd){

					$('.last-chosen-2').addClass('hide');
				    $('.last-cycle').html('<div>you can free this emotion</div>');
				    $('.last-chosen-3').css('font-size','30px');

				}else{

					$('.last-chosen-1').addClass('hide');
					$('.last-cycle').html('<div>you can free this emotion</div>');
					$('.last-chosen-2').css('font-size','30px');

				}

			});
		});


});