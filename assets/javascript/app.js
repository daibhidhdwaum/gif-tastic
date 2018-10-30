$(document).ready(function(){
    
    var topic = ["Father John Misty", "The Smiths", "Radiohead", "Depeche Mode", "Arctic Monkeys", "Super Furry Animals", "Smashing Pumpkins"];
    var bandImage;

        /*function displayBandName(){
            var bandName = $(this).attr("data-name");

            alert(bandName);
        }*/
    
        //generates a button for each band in the array
        function createButton(){
    
            for(var i = 0; i < topic.length; i++){
                bands = $("<button>");
                $(".container").append(bands);
                
                bands.attr({
                    "class": "btn",
                    "data-band-name": topic[i]
                }); 
    
                bands.text(topic[i]);
                console.log(topic); 
            }
        }//end create button

        createButton();

        //create new band button
        $("#new-band").on("click", function(event){

            $(".create-button").empty();
                
            event.preventDefault();

            var newBand  = $("#band").val();

            topic.push(newBand);

            createButton();

            });//close new band

        //button to generate 10 gifs 
        $(".btn").on("click", function(){
        
            var bands = $(this).attr("data-band-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bands + "&api_key=gOhT5yVr007PciFEeeVBlG3xEWywuguj&limit=10";
        
                //makes ajax call to giphy API and returns results
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response) {
                    var results = response.data;
                    
                    for(var i = 0; i< results.length; i++) {
        
                        var gifDiv = $("<div>");
        
                        var rating = results[i].rating;
                        var p = $("<p>").text("Rating: " +rating);
        
                        bandImage = $("<img>");
                        bandImage.attr("src", results[i].images.original.url);
                        bandImage.attr("src", results[i].images.original_still.url);
                        
                        console.log(results);
        
                        gifDiv.prepend(p);
                        gifDiv.prepend(bandImage);
        
                        $(".gifs").prepend(gifDiv);
        
                            //UNSURE HOW TO ANIMATE!!!!
                            $(".gifs").on("click", function(){
                                var state = $(this).attr(bandImage);
                        
                                if (state === "src", results[i].images.original_still.url){
                                
                                }else {
                                
                                }
                            })//image still/animate close

                    }//close for loop

                    //console.log(queryURL);
                    console.log(response);
            
                    gifDiv.prepend(bandImage);
                });//ajax call close

        });//band button close

    
});//document close