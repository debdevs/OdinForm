let password = document.getElementById("password").value
let password_validate = document.getElementById("password_validate").value

function onSubmit (){
    console.log("op")
    if (password_validate != password){
        alert("Enter the correct password")
        console.log("op")
    }
}
