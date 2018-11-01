$(document).ready(function(){
    
    var topic = ["Father John Misty", "The Smiths", "Radiohead", "Depeche Mode", "Arctic Monkeys", "Super Furry Animals", "Smashing Pumpkins"];
    var bandImage;
    
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
                //console.log(topic); 
            }
        };//end create button

        createButton();

        //create new band button
        //SOME ISSUES: AUTOMATICALLY DISPLAYS IMAGES NOT RELATED TO BAND
        //CANNOT CLICK ANY OTHER BUTTONS AFTER IT HAS BEEN CREATED
        $("#new-band").on("click", function(event){
            event.preventDefault();

            $(".create-button").empty();
                
            var newBand  = $("#band").val().trim();

            topic.push(newBand);

            createButton();

        });//close new band

        //button to generate 10 gifs 
        $(document).on("click", ".btn", function(){
        
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
                        var p = $("<p>").text("Rating: " + rating);
        
                        bandImage = $("<img>");
                        
                        bandImage.attr({"src": results[i].images.original_still.url,
                                        "data-animate": results[i].images.original.url,
                                        "data-still": results[i].images.original_still.url,
                                        "data-state": "still",
                                        "class": "gif"
                                    });

                        
                        
                        //console.log(results);
        
                        gifDiv.prepend(p);
                        gifDiv.prepend(bandImage);
        
                        $(".gifs").prepend(gifDiv);
        
                    };//close for loop

                      
                    
                    //console.log(queryURL);
                    //console.log(response);
            
                    gifDiv.prepend(bandImage);

                });//ajax call close
        });//band button close

          //WILL ONLY ANIMATE FIRST GIF
                      //WILL NOT STOP ANIMATION AGAIN
                      //TRIED INSIDE AND OUTSIDE OF LOOP
                      $(document).on("click", ".gif", function() {

                        var state = $(this).attr("data-state");

                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                        console.log("hello");
                    });
});//document close