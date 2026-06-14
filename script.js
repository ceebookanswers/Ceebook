function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "505": "page505.html",
        "648": "page648.html",
        "202": "page202.html",
        "909": "page909.html",
        "333": "page333.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
