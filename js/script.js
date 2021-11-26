

$(document).ready(function(){

	$('#yes-tr-em').click(function(event) {

		GetURL("/queries.php?choice=yes_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){

			$('.first-column').text($result_tr_em[0]);

		});
	});
	$('#no-tr-em').click(function(event) {

		GetURL("/queries.php?choice=no_tr_em","POST", "search=test_parameter","json", function ( $result_tr_em ){
			var json = '{ "background-color": "#f8f9fa","border-color":"#f8f9fa" }';
			var cssObject = JSON.parse(json);

			$('.question div').text($result_tr_em['output']);
			$('.question button[id=no-tr-em]').css(cssObject);

		});
	});
	$('#back').click(function(event) {

		$('.first-column').load("/back.php");
		
	});

// 	$result_tr_em = 'hello_ajax';
// $('.first-column').text($result_tr_em);

//------------------------------------------------------------------------------

});