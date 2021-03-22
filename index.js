const test = document.createElement("div")
document.querySelector(".about-title").after(test)
test.classList.add("about-underline")
console.log(test);




// Typed.js Effect
var typed = new Typed('.element', {
  strings: ["A web-Developer.", "A Web-designer", "A Son.", "and..... ", " ...Much more"],
  typeSpeed: 100,
  loop: true,
  backDelay: 1000,
  backSpeed: 80, 
});


// ///////////Humberger
$(".humberger-menu").click(()=>{ 
  
  $("ul").toggle()
    $(".humberger-icon").toggle()
    $(".close-icon").toggle()
})




////////// Scroll Effect


$(document).ready(function() {

  $(document).scroll(function () {
      var y = $(this).scrollTop();
      var x = $('nav').position();
      if (y > x.top ) {
          $('nav').fadeIn().css({"position":"fixed","top":"0", "width" : "100%", "background-color": " #1abc9c", "z-index": "100"});
          $(".contact-button").fadeIn().css({"background-color": "#30CACA"})
         $(".back-to-top").fadeIn().css({"display": "block"})
        } else {
          $('nav').css({"position" : "static", "background-color": "#FDFDFD"});
          $(".contact-button").css({"background-color": "#69D5B1"})
          $(".back-to-top").css({"display": "none"})
          
         
      }
      });
});

$(document).ready(()=>{
  console.log($(window).width());
  if($(window).width() > 1000){
    
$(document).ready(function() {

  $(document).scroll(function () {
      var y = $(this).scrollTop();
      var x = $('.contacts-section ').position();
      if (y > x.top + 200) {
          $(".socials").css({"display" : "none"})
        } else{
          $(".socials").css({"display": "block"})
        }
      });
});
  }else{
    $(".socials").css({"display": "none"})
  }
})






// Contact Form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Current Year

var year = new Date().getFullYear()
$("#year").text(year)



