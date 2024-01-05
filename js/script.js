
var $even_hidden = false;
var $last_chosen_odd = false;
var $primary_grid_1 = false;
var $primary_grid_2 = false;

$(document).ready(function(){
//------------------------------------------FIRST CYCLE------------------------------------------------------------
//--------------------------------tr-em---------------------------
	$('#yes-tr-em').click(function(event) {

		GetURL("/emotions/queries.php?choice=yes_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.first-column').animate({right: 20},300).animate({top: 10},300);
			$('.tr-em').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');


		});
	});

	$('#no-tr-em').click(function(event) {

		GetURL("/emotions/queries.php?choice=no_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em', $result_tr_em);
			$('.tr-em').addClass('hide');
			$('.he-wa').removeClass('hide');
			query_font('25px');


		});
	});

//-----------------------------------he-wa----------------------------
	$('#yes-he-wa').click(function(event) {

		GetURL("/emotions/queries.php?choice=yes-he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-he-wa', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.first-column').animate({right: 20},300).animate({top: 10},300);
			$('.he-wa').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');
			//to do visibility button

		});
	});

	$('#no-he-wa').click(function(event) {

		GetURL("/emotions/queries.php?choice=no_he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-he-wa', $result_tr_em);
			$('.he-wa').addClass('hide');
			$('.hi-he-wa').removeClass('hide');
			query_font('25px');


		});
	});

//-----------------------------------hi-he-wa----------------------------
	$('#yes-hi-he-wa').click(function(event) {

		GetURL("/emotions/queries.php?choice=yes-hi-he-wa","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-hi-he-wa', $result_tr_em);
			highlight_column('first-column', $result_tr_em);
			$('.first-column').animate({right: 20},300).animate({top: 10},300);
			$('.hi-he-wa').addClass('hide');
			$('.tr-em-1-col').removeClass('hide');
			//to do visibility button

		});
	});

	$('#no-hi-he-wa').click(function(event) {

		GetURL("/emotions/queries.php?choice=free-em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-hi-he-wa', $result_tr_em);
			$('.hi-he-wa').addClass('hide');
			$('.free-em').removeClass('hide');
			query_font('25px');


		});
	});

//----------------------------------------------------------COL CYCLE------------------------------------------------------------


	$('#yes-tr-em-1-col').click(function(event) {

		GetURL("/emotions/queries.php?choice=yes_tr_em_1_col","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em-1-col', $result_tr_em);
			unhighlight_column('first-column', $result_tr_em);
			
			$('.second-column').fadeOut(800);//.addClass('hide');
			$('.first-column').fadeOut(400).fadeIn(1850);//.addClass('hide');
			$('.organs').fadeOut(400).fadeIn(1850);
			$('.tr-em-1-col').addClass('hide');
			$('.tr-em-odd-even').removeClass('hide');
			setTimeout(function(){
				highlight_column('odd');
			}, 1000);

		});
	});
	$('#no-tr-em-1-col').click(function(event) {

		GetURL("/emotions/queries.php?choice=no_tr_em_1_col","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em-1-col', $result_tr_em);
			//highlight_column('first-column', $result_tr_em);
			$('.first-column').fadeOut(800);//.addClass('hide');
			$('.second-column').fadeOut(400).fadeIn(1850);//.addClass('hide');
			$('.organs').fadeOut(400).fadeIn(1850);
			$('.tr-em-1-col').addClass('hide');
			$('.tr-em-odd-even').removeClass('hide');
			setTimeout(function(){
				highlight_column('odd');
			}, 1000);

		});
	});	

//--------------------------------------------------------CELL CYCLE-----------------------------------------------------


//----------------------------------------------------ODD EVEN ----------------------------------
	$('#yes-tr-em-odd').click(function(event) {

		GetURL("/emotions/queries.php?choice=yes-tr-em-odd","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('yes-tr-em-odd', $result_tr_em);

			$even_hidden = true;
			unhighlight_column('odd');
			$('.even').fadeOut(800);
			$('.odd').fadeOut(800).fadeIn(700);
			$('.odd').css('background-color','#d6f5f9');
			$('.primary-grid-1').css('background-color','powderblue');
			$('.even-organ').fadeOut(800);//.addClass('hide');
			$('.odd-organ').fadeOut(800).fadeIn(700);
			$('.tr-em-each').removeClass('hide');
			$('.tr-em-odd-even').addClass('hide');
			$primary_grid_1 = true;			

		});

		if( $primary_grid_1 ){

			$('.primary-grid-1').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 20,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: true,                           // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

		}

	});

	$('#no-tr-em-odd').click(function(event) {

		GetURL("/emotions/queries.php?choice=no-tr-em-odd","POST", "search=test_parameter","json", function ( $result_tr_em ){

			reset_bootstrap_button_style('no-tr-em-odd', $result_tr_em);
			//highlight_column('first-column', $result_tr_em);
			unhighlight_column('odd');
			$('.odd').fadeOut(800);
			$('.even').fadeOut(800).fadeIn(700);
			$('.even').css('background-color','#d6f5f9');
			$('.primary-grid-2').css('background-color','powderblue');
			$('.odd-organ').fadeOut(800);//.addClass('hide');
			$('.even-organ').fadeOut(800).fadeIn(700);
			$('.tr-em-each').removeClass('hide');
			$('.tr-em-odd-even').addClass('hide');
			$primary_grid_2 = true;


		});

		if( $primary_grid_2 ){

			$('.primary-grid-2').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 20,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: true,                           // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

		}		

	});

//---------------------------------------------EACH CYLCE------------------

//----------------normal--------------------------------------

    

		$('#yes-tr-em-each').click(function(event) {

			GetURL("/emotions/queries.php?choice=yes-tr-em-each","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-each', $result_tr_em);
				if ($even_hidden){

					$('.tr-em-each').addClass('hide');
					$('.primary-grid-3').fadeOut();//.addClass('hide');
					$('.primary-grid-5').fadeOut();//.addClass('hide');
					$('.organs div:nth(8)').fadeOut();//.addClass('hide');
					$('.organs div:nth(4)').fadeOut();//.addClass('hide');
					$('.tr-em-emotion').removeClass('hide');

				}else{

					$('.tr-em-each').addClass('hide');
					$('.primary-grid-4').fadeOut();//.addClass('hide');
					$('.primary-grid-6').fadeOut();//.addClass('hide');
					$('.organs div:nth(7)').fadeOut();//.addClass('hide');
					$('.organs div:nth(10)').fadeOut();//.addClass('hide');
					$('.tr-em-emotion').removeClass('hide');					
				}

			});

//----------------primary stop  pulsating------------------------------------------------------------------			

			$('.primary-grid-1').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 0,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.primary-grid-2').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 0,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

//---------------------------------secondary 1 3 5 start pulsating------------------------------------------------------------------	

			$('.secondary-grid_1').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			  });

			  $('.secondary-grid_3').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			  });

			  $('.secondary-grid_5').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			  });

//---------------------------------minimise secondary 2 and 4 ----------------------------------------------------------------------

			  $('.secondary-grid_2').css({
				  'background-color':'white',

				  'color':'lightblue'
			  });
			  $('.secondary-grid_4').css({
				  'background-color':'white',

				  'color':'lightblue'
			  });

		});

		$('#no-tr-em-each').click(function(event) {

			GetURL("/emotions/queries.php?choice=no-tr-em-each","POST", "search=test_parameter","json", function ( $result_tr_em ){

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

			$('.primary-grid-1').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 20,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.primary-grid-2').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 20,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

			if($even_hidden) {

				$('.primary-grid-3').css('background-color','powderblue');

				$('.primary-grid-3').pulsate({
				  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				  reach: 20,                              // how far the pulse goes in px
				  speed: 3000,                            // how long one pulse takes in ms
				  pause: 0,                               // how long the pause between pulses is in ms
				  glow: true,                             // if the glow should be shown too
				  repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				  onHover: false                          // if true only pulsate if user hovers over the element
				});

			}else{

				$('.primary-grid-4').css('background-color','powderblue');

				$('.primary-grid-4').pulsate({
				  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				  reach: 20,                              // how far the pulse goes in px
				  speed: 3000,                            // how long one pulse takes in ms
				  pause: 0,                               // how long the pause between pulses is in ms
				  glow: true,                             // if the glow should be shown too
				  repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				  onHover: false                          // if true only pulsate if user hovers over the element
				});
			}

		});

		$('#yes-tr-em-each2').click(function(event) {

			GetURL("/emotions/queries.php?choice=yes-tr-em-each2","POST", "search=test_parameter","json", function ( $result_tr_em ){

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

			//---------------------------------primary 3 and 4 stop pulsating---------------------------------------------------------------	


			$('.primary-grid-3').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 0,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.primary-grid-4').pulsate({
			  color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			  reach: 0,                              // how far the pulse goes in px
			  speed: 3000,                            // how long one pulse takes in ms
			  pause: 0,                               // how long the pause between pulses is in ms
			  glow: true,                             // if the glow should be shown too
			  repeat: 0,                              // will repeat forever if true, if given a number will repeat for that many times
			  onHover: false                          // if true only pulsate if user hovers over the element
			});

			//---------------------------------secondary 1 3 5 start pulsating------------------------------------------------------------------	

			$('.secondary-grid_1').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.secondary-grid_3').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.secondary-grid_5').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			//---------------------------------minimise secondary 2 and 4 ----------------------------------------------------------------------

			$('.secondary-grid_2').css({
				'background-color':'white',
				'color':'lightblue'
			});
			$('.secondary-grid_4').css({
				'background-color':'white',
				'color':'lightblue'
			});
			
        //---------------------------------------------------------------------------------------------------------------------------------------

		});

		$('#no-tr-em-each2').click(function(event) {

			GetURL("/emotions/queries.php?choice=no-tr-em-each2","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('no-tr-em-each', $result_tr_em);

				if($even_hidden){

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-3').addClass('hide');
					$('.organs div:nth(4)').addClass('hide');
					$('.tr-em-emotion').removeClass('hide');
					$('.primary-grid-5').css('background-color','powderblue');

				}else{

					$('.tr-em-each2').addClass('hide');
					$('.primary-grid-4').addClass('hide');
					$('.organs div:nth(7)').parent().css('display','none');
					$('.tr-em-emotion').removeClass('hide');
					$('.primary-grid-6').css('background-color','powderblue');

				}	

			});

			//---------------------------------secondary 1 3 5 start pulsating------------------------------------------------------------------	

			$('.secondary-grid_1').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.secondary-grid_3').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.secondary-grid_5').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			//---------------------------------minimise secondary 2 and 4 ----------------------------------------------------------------------

			$('.secondary-grid_2').css({
				'background-color':'white',
				'color':'lightblue'
			});
			$('.secondary-grid_4').css({
				'background-color':'white',
				'color':'lightblue'
			});

		});

//---------------------------------------------EMOTION----------------------------------------

		$('#yes-tr-em-emotion').click(function(event) {

			GetURL("/emotions/queries.php?choice=yes-tr-em-emotio","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-emotion', $result_tr_em);

				$last_chosen_odd = true;

				$('.secondary-grid_1').addClass('last-chosen-1').css('line-height','3.9').css('margin','5px');
				$('.secondary-grid_2').addClass('hide');
				$('.secondary-grid_3').addClass('last-chosen-2').css('line-height','3.9').css('margin','5px');								
				$('.secondary-grid_4').addClass('hide');				
				$('.secondary-grid_5').addClass('last-chosen-3').css('line-height','3.9').css('margin','5px');
				$('.tr-em-emotion').addClass('hide');
				$('.three-last').removeClass('hide');

			});

			//-----------------------------------------stop pulsing-------------------------------------------

			// $('.secondary-grid_1').pulsate({
			// 	color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			// 	reach: 0,                              // how far the pulse goes in px
			// 	speed: 1000,                            // how long one pulse takes in ms
			// 	pause: 0,                               // how long the pause between pulses is in ms
			// 	glow: true,                             // if the glow should be shown too
			// 	repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
			// 	onHover: false                          // if true only pulsate if user hovers over the element
			// });

			$('.secondary-grid_3').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 0,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: false,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			$('.secondary-grid_5').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 0,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: false,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			//------------------------------------------------------------------------------------------------

		});

		$('#no-tr-em-emotion').click(function(event) {

			GetURL("/emotions/queries.php?choice=no-tr-em-emotio","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('yes-tr-em-emotion', $result_tr_em);

				$('.secondary-grid_1').addClass('hide');
				$('.secondary-grid_2').addClass('last-chosen-1').css({
					'line-height':'6',
					'color':'black',
					'margin':'5px'
				});
				$('.secondary-grid_3').addClass('hide');								
				$('.secondary-grid_4').addClass('last-chosen-2').css({
					'line-height':'6',
					'color':'black',
					'margin':'5px'
				});				
				$('.secondary-grid_5').addClass('hide');
				$('.tr-em-emotion').addClass('hide');
				$('.last-cycle').removeClass('hide');

			});

			$('.secondary-grid_2').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

			//-----------------------------------------stop pulsing-------------------------------------------

			// $('.secondary-grid_3').pulsate({
			// 	color: "rgb(10, 20, 100)", 	  // set the color of the pulse
			// 	reach: 1,                              // how far the pulse goes in px
			// 	speed: 1000,                            // how long one pulse takes in ms
			// 	pause: 0,                               // how long the pause between pulses is in ms
			// 	glow: true,                             // if the glow should be shown too
			// 	repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
			// 	onHover: false                          // if true only pulsate if user hovers over the element
			// });

			//------------------------------------------------------------------------------------------------

		});

		$('#three-last-yes').click(function(event) {

			GetURL("/emotions/queries.php?choice=three-last-yes","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('three-last-yes', $result_tr_em);

				$('.last-chosen-2').addClass('hide');
				$('.last-chosen-3').addClass('hide');
				$('.three-last').html('<div style="margin:25px">you can free this emotion</div><button type="button" class="btn btn-light"><a href="/emotions/"><-back</a></button>');
				$('.last-chosen-1').css('font-size','30px').css('line-height','11').css('margin','0');
			});

			//-----------------------------------stop pulsing----------------------------------------

			$('.secondary-grid_1').pulsate('destroy');

			$('.secondary-grid_1').pulsate({
				color: "rgb(33, 33, 251)", 	  // set the color of the pulse
				reach: 0,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});

		});

		$('#three-last-no').click(function(event) {

			GetURL("/emotions/queries.php?choice=three-last-no","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('three-last-no', $result_tr_em);

				$('.last-cycle').removeClass('hide');
				$('.three-last').addClass('hide');
				$('.last-chosen-1').addClass('hide');

			});

			$('.last-chosen-2').pulsate({
				color: "rgb(10, 20, 100)", 	  // set the color of the pulse
				reach: 1,                              // how far the pulse goes in px
				speed: 1000,                            // how long one pulse takes in ms
				pause: 0,                               // how long the pause between pulses is in ms
				glow: true,                             // if the glow should be shown too
				repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
				onHover: false                          // if true only pulsate if user hovers over the element
			});			
		});

		$('#last-cycle-yes').click(function(event) {

			GetURL("/emotions/queries.php?choice=last-cycle-yes","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('last-cycle-yes', $result_tr_em);

				if($last_chosen_odd){

					$('.last-chosen-3').addClass('hide');
					$('.last-cycle').html('<div style="margin:25px">you can free this emotion</div><button type="button" class="btn btn-light"><a href="/emotions/"><-back</a></button>');
					$('.last-chosen-2').css('font-size','30px').css('line-height','11').css('margin','0');

				}else{

				    $('.last-chosen-2').addClass('hide');
				    $('.last-cycle').html('<div style="margin:25px">you can free this emotion</div><button type="button" class="btn btn-light"><a href="/emotions/"><-back</a></button>');
				    $('.last-chosen-1').css('font-size','30px').css('line-height','11').css('margin','0');

			}	

			});

			if ( $last_chosen_odd ){

				$('.last-chosen-2').pulsate('destroy');

				$('.last-chosen-2').pulsate({
					color: "rgb(10, 20, 100)", 	  // set the color of the pulse
					reach: 0,                              // how far the pulse goes in px
					speed: 1000,                            // how long one pulse takes in ms
					pause: 0,                               // how long the pause between pulses is in ms
					glow: true,                             // if the glow should be shown too
					repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
					onHover: false                          // if true only pulsate if user hovers over the element
				});	

			}else{

				$('.last-chosen-1').pulsate('destroy');

				$('.last-chosen-1').pulsate({
					color: "rgb(10, 20, 100)", 	  // set the color of the pulse
					reach: 0,                              // how far the pulse goes in px
					speed: 1000,                            // how long one pulse takes in ms
					pause: 0,                               // how long the pause between pulses is in ms
					glow: true,                             // if the glow should be shown too
					repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
					onHover: false                          // if true only pulsate if user hovers over the element
				});

			}


		});

		$('#last-cycle-no').click(function(event) {

			GetURL("/emotions/queries.php?choice=last-cycle-no","POST", "search=test_parameter","json", function ( $result_tr_em ){

				reset_bootstrap_button_style('last-cycle-no', $result_tr_em);

				if( $last_chosen_odd ){

					$('.last-chosen-2').addClass('hide');
				    $('.last-cycle').html('<div style="margin:25px">you can free this emotion</div><button type="button" class="btn btn-light"><a href="/emotions/"><-back</a></button>');
				    $('.last-chosen-3').css('font-size','30px').css('line-height','11').css('margin','0');

				} else {

					$('.last-chosen-1').addClass('hide');
					$('.last-cycle').html('<div style="margin:25px">you can free this emotion</div><button type="button" class="btn btn-light"><a href="/emotions/"><-back</a></button>');
					$('.last-chosen-2').css('font-size','30px').css('line-height','11').css('margin','0');

				}

			});

			if ( $last_chosen_odd ){

				$('.last-chosen-3').pulsate({
					color: "rgb(10, 20, 100)", 	  // set the color of the pulse
					reach: 0,                              // how far the pulse goes in px
					speed: 1000,                            // how long one pulse takes in ms
					pause: 0,                               // how long the pause between pulses is in ms
					glow: true,                             // if the glow should be shown too
					repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
					onHover: false                          // if true only pulsate if user hovers over the element
				});	

			} else {

				$('.last-chosen-2').pulsate({
					color: "rgb(10, 20, 100)", 	  // set the color of the pulse
					reach: 0,                              // how far the pulse goes in px
					speed: 1000,                            // how long one pulse takes in ms
					pause: 0,                               // how long the pause between pulses is in ms
					glow: true,                             // if the glow should be shown too
					repeat: true,                              // will repeat forever if true, if given a number will repeat for that many times
					onHover: false                          // if true only pulsate if user hovers over the element
				});

			}
		});


});