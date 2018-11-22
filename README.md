# giftastic

https://daibhidhdwaum.github.io/gif-tastic/

The aim of Giftastic was to display gifs on a page when the user clicked a button. When the user clicked on
individual gifs it would set them to either still or to animate. It also allowed the user to generate their 
own button and generate gifs that relate to said button.

I achieved this by using HTML, CSS, Bootstrap and Giphy API and created a music theme with a number of pre-defined 
band buttons that the user could click on.

First, I created an array of buttons that would be displayed on page load, with each one representing a band. 
I created an function with an on-click event for each button that then made an ajax call and the response then
returned 10 images. The responseis  fed through a for loop and then displayed on the page. Each button that is 
clicked continues to trigger an ajax call for the band the button represents and would then prepend it to 
the gifs currently on display. I then created another function that if, when an image on display is clicked
and is currently still would cause it to animate. If the opposite is true then the on-click event would cause
the image to become still again.
