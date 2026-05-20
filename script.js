function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "368": "page368.html",
        "11": "page574.html",
        "30": "page1.html",
        "31": "page2.html",
        "31": "page3.html",
        "310": "page310.html",
        "311": "page311.html",
        "312": "page312.html",
        "777": "page7.html",
        "888": "page8.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
