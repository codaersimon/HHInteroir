function subInput(){ 
    console.log(document.getElementById("inputname").value)
    console.log(document.getElementById("inputmail").value)
    console.log(document.getElementById("inputmessage").value)
}
// resetting the input field
function clearField() {
    document.getElementById("inputname").value = ""
    document.getElementById("inputmail").value = ""
    document.getElementById("inputmessage").value = ""
}
