function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "017": "page017.html",
        "944": "page944.html",
        "441": "page441.html",
        "601": "page601.html",
        "016": "page016.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
