function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "763": "page763.html",
        "187": "page187.html",
        "188": "page188.html",
        "189": "page189.html",
        "200": "page200.html",
        "444": "page4.html",
        "555": "page5.html",
        "666": "page6.html",
        "777": "page7.html",
        "888": "page8.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
