function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "909": "page909.html",
        "648": "page648.html",
        "20": "page20.html",
        "99": "page99.html",
        "022": "page022.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
