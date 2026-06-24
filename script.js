function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "010": "page010.html",
        "648": "page648.html",
        "012": "page012.html",
        "013": "page013.html",
        "011": "page011.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
