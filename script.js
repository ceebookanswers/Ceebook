function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "0000") {
        window.location.href = "math.html";
    } 
    else if (password === "567") {
        window.location.href = "https://www.ceebookanswers.com.ng/2021/01/how-to-subscribe100.html?m=1";
    } 
    else if (password === "111") {
        window.location.href = "./ans1.html";
    } 
    else if (password === "222") {
        window.location.href = "ans2.html";
    } 
    else if (password === "333") {
        window.location.href = "ans3.html";
    } 
    else {
        alert("Wrong Password! Please contact Mr Dan.");
    }
}
