
const firstNumber = document.querySelector("#first-number")
const secundNumber = document.querySelector("#second-number")
const form = document.getElementById("form")
const mensagerUser = document.querySelector(".mensage-user")
const erroMensager = document.querySelector(".error-mensager")


function numberValidation (){
    return secundNumber.value > firstNumber.value
}


function handleValidation (event) {
    let formValid = false
    event.preventDefault();

    formValid = numberValidation()
    const mensagem = `Formulario valido ${secundNumber.value} é maior que ${firstNumber.value}`

    if(formValid){
        mensagerUser.style.display = "block"
        erroMensager.style.display = "none"
        mensagerUser.innerHTML = mensagem
        firstNumber.value = ""
        secundNumber.value = ""
        firstNumber.style.outline = ''
        firstNumber.focus()
    }else {
        erroMensager.style.display = "block"
        firstNumber.style.border = "1px solid red"
        firstNumber.style.outline = "red"
        firstNumber.focus()
        mensagerUser.style.display = "none"
    }



}


firstNumber.addEventListener('keyup', (e) => {
    const validationFirstNumber = e.target.value

    if(validationFirstNumber === ""){
        erroMensager.style.display = "none"
        firstNumber.style.outline = ''
        firstNumber.style.border = ''
        
    }else {
        mensagerUser.style.display = "none"
    }
})

form.addEventListener("submit", handleValidation)





