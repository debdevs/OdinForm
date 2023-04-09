let password = document.getElementById("password")
let password_validate = document.getElementById("password_validate")

function onSubmit (){
    console.log(document.getElementById("password"))
    if (password_validate != password){
        alert("Passwords do not match")
        console.log("op3")
        password.style.borderColor = "red"
        password_validate.style.borderColor = "red"
    } else{
        password.style.borderColor = "#E5E7EB"
        password_validate.style.borderColor = "#E5E7EB"  
    }
}
