/*Inicio header diminuir ao dar Scroll */

const header = document.querySelector("#header nav")
const logo = document.querySelector("#header nav .logo-header a h1")
const logoSpan = document.querySelector("#header nav .logo-header a span")
const naveg = document.querySelector("#header nav ul")

document.addEventListener("scroll", ()=>{
    var scroll_position = window.scrollY
    if(scroll_position > 250){
        header.style.backgroundColor = "rgb(#318174)"
        header.style.height = '45px'
        logo.style.fontSize = '3em'
        logoSpan.style.fontSize = '.6em'
        naveg.style.fontSize = '1em'
    }else{
        header.style.backgroundColor = "#318174" 
        header.style.height = '80px'
        logo.style.fontSize = '4em'
        logoSpan.style.fontSize = '.8em'
        naveg.style.fontSize = '1.2em'
    }
})

/*Inicio header diminuir ao dar Scroll */

/*Inicio Slider de imagens no inicio */

const imagens = document.querySelectorAll(".box-imagens img")
const maxImg = imagens.length
let time = 10000
let posicao = 0


function mudarImg() {
    imagens[posicao].classList.remove("selecionada")
    posicao++
    if (posicao >= maxImg) {
        posicao = 0
    }
    imagens[posicao].classList.add("selecionada")
}
function iniciarSlider() {
    setInterval(() => {
        mudarImg()
    }, time)
}

window.addEventListener("load", iniciarSlider)

/*Inicio Slider de imagens no inicio */

 /* Inicio da Validação do formulário */

const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector(".error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()
}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}

document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

})
/*Final da validação do formulário */

/*Inicio funcionalidade botão menu */

const addLista = document.querySelector(".active-btn-mobile")
const btnMobile = document.querySelector(".hamburger")
const btnLinks = document.querySelectorAll(".active-btn-mobile ul li a")
const btnFecharMenu = document.querySelector(".hamburger .bar")

btnMobile.addEventListener("click", ()=>{
    header.style.height = '80px'
    addLista.classList.toggle("active-btn-mobile")
    btnFecharMenu.classList.toggle("active")
})

btnLinks.forEach((item) =>{
    item.addEventListener("click", ()=>{
        addLista.classList.toggle("active-btn-mobile")
        btnFecharMenu.classList.toggle("active")
    })
})

/*Final funcionalidade botão menu */