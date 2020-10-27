$(document).ready(function(){
    "use strict"; 

    // $("main article:first").hide(); 
    
    // One

    // .clone() copy all the element 
    // var copy = $("main article:last").clone(); 
    // $('main').prepend(copy); 


    // Two 

    // $("div.logo img").on("click",function(){
    //     console.log("Img is clicked"); 
    // })

    // $("div.logo img").on("click",function(){
    //     $(this).remove(); 
    // })

    // Three 

    // $("div.logo img").addClass("activo"); 
    //$("#navegacion li:first").addClass("activo");
    //$("main article:nth-child(2)").addClass("activo");  

    // $("#navegacion li a").on("click",function(e){
    //     e.preventDefault(); 
    //     $("#navegacion li a").removeClass("activo"); 
    //     $(this).addClass("activo"); 
    // })

    // Four 
    // $("main").on({
    //     click:function(){
    //         $(this).addClass("fondorojo activo"); 
    //     }, 
    //     mouseenter:function(){
    //         $(this).addClass("fondorojo");
    //     },
    //     mouseleave:function(){
    //         $(this).removeClass("fondorojo"); 
    //     }
    // })


    // Five 
    // $("main article:first img").on("click", function(){
    //     $(this).attr("src", "img/imagen_2.jpg"); 
    // })

    // Six 
    // $(".navegacion li a").on("mouseenter", changeColor); 
    // function changeColor(){
    //     $(".navegacion").css({
    //         background:"red" 
    //     })
    // }


    // Seven 
    // $(".logo img").on("click",function(){
    //     $(this).animate({"width":"200px"},1000); 
    // })

    // $("main article img").on("mouseenter", largeImg); 
    // $("main article img").on("mouseleave", normalImg); 

    // function largeImg(){
    //     $(this).animate({"width":"100%"}, 1000); 
    // }
    // function normalImg(){
    //     $(this).animate({"width":"350px"},1000)
    // }

    // Eight 
    // ******* Ajax Call *******

    // $("div.logo img").on("click", ajaxCall); 

    // function ajaxCall(){
    //     $.ajax("data.txt", {
    //         success: showContent, 
    //         type: "GET", 
    //         datatype: "text"
    //     })
    // }

    // function showContent(data, status, jqhxr){
    //     $("aside").text(data); 
    //     console.log(status)
    // }

    // Load External Page // 
    //$("aside").load("optional.html"); 


    // Nine 
    // **** Looping through Arrays **** 

    // var fruits = ["apple","mango","orange","banana","peak"]; 
    // console.log(fruits); 

    // $.each(fruits, function(i,v){
    //     if( i == 0){
    //         $("aside").append("<h2>Fruits</h2"); 
    //     }
    //     $("aside").append("<li>" + v + "</li>"); 
    // })

    // var user = {
    //     name : "Alex", 
    //     age : 10, 
    //     lang : "English"
    // }
    // $.each(user, function(i,v){
    //     $("aside").append("<li>" + v + "</li"); 
    // })

})