$(document).ready(function(){
    
var topic = ["Father John Misty", "The Smiths", "Radiohead", "Depeche Mode", "Arctic Monkeys", "Blur", "Lambchop"];


function createButton(){


    
    for(var i = 0; i < topic.length; i++){
        topics = $("<button>");
        $(".container").append(topics);
        
        topics.attr({
            "class": "btn",
            "data-name": topic[i],
            "html": topic[i],
        })   
    }
}
createButton();
console.log(topic);

});