function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "186": "page186.html",
        "187": "page187.html",
        "188": "page188.html",
        "222": "page2.html",
        "333": "page3.html",
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
