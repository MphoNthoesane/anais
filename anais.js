let registration
document.getElementById("regfill").onclick = function(){

    alert()
    registration = document.getElementById("registration").value
    document.getElementById("aircraft").innerHTML = registration
    document.getElementById("field").innerHTML = "REG/" + registration
}