// menu-scroll

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        document.getElementById("menu-scroll").style.display = "block";
    } else {
        document.getElementById("menu-scroll").style.display = "none";
    }
}