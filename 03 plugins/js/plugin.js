$(document).ready(function(){

    // Animate Number 
    // $("#number").animateNumber({number:10},2000); 

    // Count down 

    /*
    $("#count").countdown("2020/11/3 12:00:00", function(event){
        $(this).text(event.strftime('%D days %H:%M:%S'));
    })

    */


    // Letterings JS, need to use css
    // $("#letter").lettering(); 

    // Lightbox Plugin
    $("#menu-mobile").on("click",function(){
        $("#navigation").slideToggle(); 
    })


})