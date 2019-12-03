function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },1000);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },1000);
}
function showother(){
    $("#other_container").css("display","inherit");
    $("#other_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#other_container").removeClass("animated slideInRight");
    },1000);
}
function closeother(){
    $("#other_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#other_container").removeClass("animated slideOutRight");
        $("#other_container").css("display","none");
    },1000);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInUp");
    },1000);
}
function closework(){
    $("#work_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutDown");
        $("#work_container").css("display","none");
    },1000);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#other").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

/* $('#V1, #V2, #V2B, #V3').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
}) */ 