function checkPassword() {
    var password = document.getElementById("password").value.trim();

    var routes = {
        "000": "https://www.ceebookanswers.com.ng/p/waec-mathematics-2025.html?m=1",
        "567": "Copy.html",
        "111": "https://www.ceebookanswers.com.ng/p/lite.html?m=1",
        "222": "https://www.ceebookanswers.com.ng/p/neco-chemistry.html?m=1",
        "333": "https://www.ceebookanswers.com.ng/p/waec-2025-english-language.html?m=1",
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
