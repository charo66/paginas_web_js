function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    domBtnSaludar.addEventListener('click',mostrar)
    domBtnBorrar.addEventListener('click', borrar)

    function mostrar() {
        domOutput.innerHTML = ''
        let valorNombre = domNombre.value
        if (!!valorNombre) {
            domOutput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
        }
    }

    function borrar () {
        domNombre.value = '',
        saludar()
       
    }

}
document.addEventListener('DOMContentLoaded', app)