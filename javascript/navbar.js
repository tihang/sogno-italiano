 // Scroll listener
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    if (currentScrollPos > 180) {
    document.getElementById("navbar").style.top = "-200px";
    }
}
prevScrollpos = currentScrollPos;
};


// function toggleScrollLock() {
//     // DISABLE SCROLL ON MENU OPEN
//     //$("body").toggleClass("disable-scroll", "enable-scroll")
// }

function disableScroll() {
    $("body").addClass("disable-scroll")
    //$("body").removeClass("enable-scroll")
}

// function enableScroll() {
//     $("body").addClass("enable-scroll")
//     $("body").removeClass("disable-scroll")
// }


// NAVBAR OPEN/CLOSE
$('#hamburger').click(function() {
    $("#hamburger").toggleClass('is-active');
    $('#overlay').toggleClass('open');
    $("body").toggleClass("disable-scroll")
});


$(".nav-links").click(function() {
    $("#hamburger").toggleClass('is-active');
    $('#overlay').removeClass('open');

    $("body").removeClass("disable-scroll")
})