//jshint esversion:6

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

const screenWidth = screen.width;

/*carrossel*/
    function moveCarrossel(){       
        let time = 2000,
            currentCommentMobile = 0,
            currentCommentDesktop = 3,
            comments = document.querySelectorAll(".comment"),
            max = comments.length,
            dotElement = document.querySelectorAll(".dot") 

        // Mobile Verison
        if(screenWidth <= 768){
            currentSlide(currentCommentMobile)
            setInterval(()=> {
                comments[currentCommentMobile]
                    .classList.remove("selected");

                dotElement[currentCommentMobile]
                    .classList.remove("dotClicked");
                        
                currentCommentMobile++
                
    
                if(currentCommentMobile >= max){
                    currentCommentMobile = 0
                }
        
                comments[currentCommentMobile]
                        .classList.add("selected")

                dotElement[currentCommentMobile]
                        .classList.add("dotClicked")               
                }, time) 
        }else{//Desktop Version
            comments[0].classList.add("selected");
            comments[1].classList.add("selected");
            comments[2].classList.add("selected");

            setInterval(()=> {
                comments[currentCommentMobile]
                    .classList.remove("selected");
    
                    currentCommentMobile++
    
                if(currentCommentMobile >= max){
                    currentCommentMobile = 0
                }
        
                comments[currentCommentDesktop]
                        .classList.add("selected")

                        currentCommentDesktop++

                if(currentCommentDesktop >= max){
                    currentCommentDesktop = 0
                } 
            }, time)                       
        }
           
    }

    // function currentSlide(n){
    //    console.log(n)
    //    let comments = document.querySelectorAll(".comment"),
    //         currentDot = document.querySelectorAll(".dot");      
        
    //     document.querySelector(".selected").classList.remove("selected")
    //     comments[n].classList.add("selected") 
    //     currentDot[n].classList.add("dotClicked")    

    // }

    function startCarrossel(){       
        moveCarrossel();
    }   
    function ready() {
        startCarrossel()
    }
    document.addEventListener("DOMContentLoaded", ready);

    //window.addEventListener("load", start)
/**/