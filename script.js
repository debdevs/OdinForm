let password = document.getElementById("password")
let password_validate = document.getElementById("password_validate")

function onSubmit (){
    console.log(document.getElementById("password"))
    if (password_validate != password){
        alert("Enter the correct password")
        console.log("op3")
    }
}
