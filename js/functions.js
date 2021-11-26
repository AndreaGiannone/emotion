
    function isValidURL(string) {
	    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	    return (res !== null);
	}

    function getAllUrlParams(queryString) {

        // we'll store the parameters here
        var obj = {};

        // if query string exists
        if (queryString) {

          // stuff after # is not part of query string, so get rid of it
          queryString = queryString.split('#')[0];

          // split our query string into its component parts
          var arr = queryString.split('&');

          for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            // paramName = paramName.toLowerCase();
            // if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

              // create key if it doesn't exist
              var key = paramName.replace(/\[(\d+)?\]/, '');
              if (!obj[key]) obj[key] = [];

              // if it's an indexed array e.g. colors[2]
              if (paramName.match(/\[\d+\]$/)) {
                // get the index value and add the entry at the appropriate position
                var index = /\[(\d+)\]/.exec(paramName)[1];
                obj[key][index] = paramValue;
              } else {
                // otherwise add the value to the end of the array
                obj[key].push(paramValue);
              }
            } else {
              // we're dealing with a string
              if (!obj[paramName]) {
                // if it doesn't exist, create property
                obj[paramName] = paramValue;
              } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                // if property does exist and it's a string, convert it to an array
                obj[paramName] = [obj[paramName]];
                obj[paramName].push(paramValue);
              } else {
                // otherwise add the property
                obj[paramName].push(paramValue);
              }
            }
          }
        }

        return obj;
      }
    


    function getUrlVars(url) {

        if (typeof url !== 'string') {
            url = document.URL;
        };

        if (url.includes("?")){

            // raps_console("Split", url.split("?")[1]);

            return getAllUrlParams(url.split("?")[1].trim())

        } else {

            return getAllUrlParams(url);

        }

    };    

    function RemoveParam(ParamName, input_url){

        var new_string = "";
        var input_url_given = false;

        if (typeof input_url !== 'string') {

            input_url = document.URL;

        } else {

            input_url_given = true;

        }

        var AllParams = getUrlVars(input_url);

        //raps_console("RemoveParam:: All Params", AllParams);

        $.each(AllParams, function(index, val) {

            //raps_console("new_string: " + new_string)
            if (index !== ParamName){

                //raps_console(typeof val);

                if (new_string !== ""){
                    new_string += "&";
                };

                if (typeof val == "string"){

                    new_string += index + "=" + val;

                } else if (typeof val == "object"){

                    $var_add_amp = false;

                    $.each(val, function(val_index, val_val) {

                        if ($var_add_amp){
                            new_string += "&";
                        }

                        new_string += index + "=" + val_val;
                        $var_add_amp = true;

                   });

                };

            };

        });

        //raps_console("After Loop: " + new_string)

        if (input_url_given){

            if (new_string !== ""){

            //raps_console("get_url_without_params:: " + get_url_without_params(input_url));

                if (isValidURL(input_url)){

                    return get_url_without_params(input_url)  + "?" + new_string;

                } else {

                    return new_string;

                }

            } else {

                return get_url_without_params(input_url);

            };

        } else {

            if (new_string !== ""){

                return location.protocol + '//' + location.host + location.pathname + "?" + new_string;

            } else {

                return location.protocol + '//' + location.host + location.pathname;

            };

        };

    };

function GetURL($the_URL, $type, $post, $datatype, callback) {

  var ReturnVal = "";

  if (($type == null) || ($type == "")) {
    $type = "POST";
  }

  if (($datatype == null) || ($datatype == "")) {

    $datatype = "html";

  }

  if (($post == null) || ($post == "")) {

    $post = "p=" + 'emotions';

  } else {

    $post = RemoveParam('p', $post);
    $post = $post + "&p=" + 'emotions';

  }

  ReturnVal = $.ajax({
    async: false,
    type: $type,
    url: $the_URL,
    cache: false,
    data: $post,
    dataType: $datatype,
    success: function (msg) { }
  }).responseText;

  if ($datatype == "json" && typeof ReturnVal == 'string' && ReturnVal !== "") {

    // raps_console(ReturnVal);

    try {
      ReturnVal = $.parseJSON($.trim(ReturnVal));
    } catch(err) {
      ReturnVal = {"error": "JSON Parse Error", "message": err.message};
    }

  }

  if (callback && typeof (callback) === "function") {

    callback(ReturnVal);

  } else {

    return ReturnVal;

  }

}