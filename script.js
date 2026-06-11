function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "505": "page505.html",
        "648": "page648.html",
        "872": "page872.html",
        "873": "page873.html",
        "333": "page333.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
