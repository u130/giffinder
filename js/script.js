// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global_*/
$(document).ready(function(){
  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
   var newUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
	
    return newUrl;

 
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('#result').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      
      success: function(response) {
           var url = response.data[0].images.original.url;
           appendImageToBody(url);
           
      },
    }); 
}

//Add a click handler beloe to call the function when the button is clicked
$("button").click(function() {
var searchTerm = $("input").val();
console.log("searchTerm " + searchTerm)
var searchTerm2 = $('#srch-term2').val();
console.log("searchTerm2 " + searchTerm2)
var searchTerm3 = $("input"+'#srch-term2').val();
console.log("searchTerm3 " + searchTerm3)
callGiphyAPIWithSearchTerm(searchTerm);
callGiphyAPIWithSearchTerm(searchTerm2);
callGiphyAPIWithSearchTerm(searchTerm3);
});
    
  
  
  
});





