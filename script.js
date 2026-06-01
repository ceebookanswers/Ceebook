function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "945": "page945.html",
        "574": "page574.html",
        "30": "page1.html",
        "31": "page2.html",
        "32": "page3.html",
        "310": "page310.html",
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
