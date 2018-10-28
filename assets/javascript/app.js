$(document).ready(function(){
    
var topic = ["Father John Misty", "The Smiths", "Radiohead", "Depeche Mode", "Arctic Monkeys", "Blur", "Lambchop"];
var results;

//generates a button for each band in the array
function createButton(){

    for(var i = 0; i < topic.length; i++){
        bands = $("<button>");
        $(".container").append(bands);
        
        bands.attr({
            "class": "btn",
            "data-band-name": topic[i]
        }); 
        console.log(topic); 
    }
}
    createButton();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=gOhT5yVr007PciFEeeVBlG3xEWywuguj&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
        
        for(var i = 0; i< results.length; i++) {

            var gifDiv = $("<div>");

            

            var bandImage = $("<img>");
            bandImage.attr("src", results[i].images.original_still.url);
            console.log(results);

            $(".gifs").prepend(gifDiv);
        }

        console.log(queryURL);
        console.log(response);

        gifDiv.prepend(bandImage);

        
        });       

});