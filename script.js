function checkPassword() {
    var password = document.getElementById("password").value.trim();

    if (password === "000") {
        window.location.href = "https://www.ceebookanswers.com.ng/p/waec-mathematics-2025.html?m=1";
    } 
    else if (password === "567") {
        window.location.href = "maths.html";
    } 
    else if (password === "111") {
        window.location.href = "https://www.ceebookanswers.com.ng/p/lite.html?m=1";
    } 
    else if (password === "222") {
        window.location.href = "https://www.ceebookanswers.com.ng/p/neco-chemistry.html?m=1";
    } 
    else if (password === "333") {
        window.location.href = "https://www.ceebookanswers.com.ng/p/waec-2025-english-language.html?m=1";
    } 
    else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
