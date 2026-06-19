function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "601": "page601.html",
        "648": "page648.html",
        "022": "page022.html",
        "99": "page99.html",
        "01": "page01.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
