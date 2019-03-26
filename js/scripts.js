$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
let typed= new Typed(document.querySelector(".sub"),{
    strings:['Web Developer', "Front-End Developer", "Student"],
    typeSpeed: 40,
    loop: true,
    startDelay: 1000,
    showCursor: false
});

});
