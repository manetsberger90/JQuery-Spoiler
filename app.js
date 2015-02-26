//PREVENT SPOILER-PHOBES FROM SEEING SPOILERS.
//Solution: Hide Spoilers and reveal them through user interaction.

//1. Hide Spoiler. 
$(".spoiler span").hide();

//2. Add a Button
$(".spoiler").append("<button>Reveal Spoiler!</button>");

//3. When button is pressed
$("button").click(function() { 
   //3.1 Reveal Spoiler next to the button clicked!
    $(this).prev().show();
   //3.2 Get rid of Button
   $(this).remove();
});