//jshint esversion:6

//----------------------------------------------------------------
/*Hamburguer menu*/
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
//----------------------------------------------------------------
//----------------------------------------------------------------
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
            // currentSlide(currentCommentMobile)
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

//----------------------------------------------------------------
//----------------------------------------------------------------
/*Email validations */
function validateEmail(){
    const resultEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const email = $('#email').val();
    const emailInput = $('#email')
    const resultMessage = $('#result-email');
    console.log(email)
    emailInput.css('color', 'black');  
    resultMessage.css('display', 'none');

    if(resultEmail.test(email)){ 
        emailInput.css('color', 'green'); 
    }else{
        resultMessage.css('display', 'block');
        emailInput.css('color', 'red');   
    }
}

//----------------------------------------------------------------
//----------------------------------------------------------------
    //window.addEventListener("load", start)
/**/
