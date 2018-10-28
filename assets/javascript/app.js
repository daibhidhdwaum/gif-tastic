$(document).ready(function(){
    
var topic = ["Father John Misty", "The Smiths", "Radiohead", "Depeche Mode", "Arctic Monkeys", "Blur", "Lambchop"];
var results;
var APIKey = "gOhT5yVr007PciFEeeVBlG3xEWywuguj";

//generates a button for each band in the array
function createButton(){

    for(var i = 0; i < topic.length; i++){
        bands = $("<button>");
        $(".container").append(bands);
        
        bands.attr({
            "class": "btn",
            "data-band-name": topic[i]
        });  
    }
}
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=&api_key=gOhT5yVr007PciFEeeVBlG3xEWywuguj";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        console.log(queryURL);
        console.log(response);
        });       

});