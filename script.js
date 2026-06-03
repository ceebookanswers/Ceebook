function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "017": "page017.html",
        "648": "page648.html",
        "441": "page441.html",
        "952": "page952.html",
        "333": "page333.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
