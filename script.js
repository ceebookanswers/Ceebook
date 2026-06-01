function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "95": "page95.html",
        "59": "page59.html",
        "41": "page41.html",
        "954": "page954.html,
        "441": "page441.html,
        "31": "page31.html",
        "32": "page32.html",
        "1": "page1.html",
        "311": "page311.html",
        "312": "page312.html",
        "99": "page99.html",
        "944": "page944.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
