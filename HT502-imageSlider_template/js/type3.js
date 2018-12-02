$(document).ready(function(){
    $("#slider ul li.item:gt(0)").hide();

    var start;
    var fading = function(){
       start = setInterval(function(){
            $("#slider ul li.item:first").fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#slider ul");
    
        },2000);

    }

    fading();

    $("#slider").hover(function(){
        console.log("mouse in");
        clearInterval(start);

    },function(){
        fading();
        console.log("mouse out");

    });
});