// Scroll top button
window.onscroll = function() {
    var x, top;
    top = document.getElementsByClassName("top")[0];
    x = document.body.scrollTop || document.documentElement.scrollTop;

    if(x>20) {
        top.style.display = "flex"
    } else {
        top.style.display = "none"
    }

    top.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
};