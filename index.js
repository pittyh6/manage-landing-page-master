$(function(){
    $(".toggle").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
            $(".icon-toggle").attr("src", "./images/icon-hamburger.svg");
        }else{
            $(".item").addClass("active");
            $(".item.button").removeClass("active");
            $(".icon-toggle").attr("src", "./images/icon-close.svg");
        }
    });
});