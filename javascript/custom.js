var menu = function() {
    var btn = document.querySelector('.navigation');
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
menu();