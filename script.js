function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "954": "page954.html",
        "944": "page944.html",
        "441": "page441.html",
        "95": "page95.html",
        "99": "page99.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
