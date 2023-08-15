function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {

        alert("Login successful!");
        window.location.href = "welcome.html"; 
    } else {
        alert("Invalid username or password. Get the hell out of here little boy.");
    }
}
function copyText1() {
    var textToCopy = "1Z2A3K4I5R6O7V";

    var tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

}
function copyText2() {
    var textToCopy = "password";

    var tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

