

function toHex(c) {
    var int = parseInt(c);
    var hex = int.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function verify_password() {
    let pass1 = document.getElementById("first_pass").value;
    let pass2 = document.getElementById("second_pass").value;

    if (pass1.length < 8) { alert("The First Password is Less than 8 Letters"); return; }
    if (pass2.length < 8) { alert("The Second Password is Less than 8 Letters"); return; }

    if (pass1 != pass2) { alert("The two passwords dont match!"); return; }

    alert("All good!");
    return;


}




function change_text() {
    let border_r = document.getElementById("border_r").value;
    let border_g = document.getElementById("border_g").value;
    let border_b = document.getElementById("border_b").value;
    var width = document.getElementById("border_width").value;
    let background_r = document.getElementById("background_r").value;
    let background_g = document.getElementById("background_g").value;
    let background_b = document.getElementById("background_b").value;


    document.getElementById("textbox").style.borderColor = rgbToHex(border_r, border_g, border_b);
    document.getElementById("textbox").style.backgroundColor = rgbToHex(background_r, background_g, background_b);
    document.getElementById("textbox").style.borderWidth = width + "px";





}