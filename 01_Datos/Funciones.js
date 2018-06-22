/* Dos tipos de funciones
    - Funciones puras, sin "side effects" -> retornan datos
    - Funciones con efectos
*/
//Función pura no se ve en consola
function sumar(a,b) {
    let resultado = a+b
    return resultado;
}
//Función con efecto
function mostrar(dato) {
    console.log(dato)
}
//Función main
function main() {
    let resultado = sumar(2,5)
    mostrar(resultado)
    
    mostrar(sumar(45, 172354))
}

main()
