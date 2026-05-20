function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "368": "page368.html",
        "574": "page574.html",
        "310": "page310.html",
        "311": "page311.html",
        "312": "page312.html",
        "444": "page4.html",
        "555": "page5.html",
        "666": "page6.html",
        "777": "page7.html",
        "888": "page8.html"
    };

    if (routes[password]) {
        window.location.href = routes[password];
    } else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
