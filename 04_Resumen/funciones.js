// Declaracion

/**
 * 
 * Calcular area de diversas figuras
 * 
 * @param:string nombre de la figura
 * @param:object datos de la figura
 *  si es triangulo h y b
 *  si es cuadrado l
 *  si es circulo r
 * @return:number area de la figura
 * 
 */

function calcularArea(figura, datos) {
    let resultado = 1

    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':
           // datos {h:12.3, b: 10.5}
           for (const key in datos) {
                resultado *= datos[key]
           }
            resultado /= 2
            break;
        case 'cuadrado':
            resultado = datos.l * datos.l
            break;
        case 'circulo':
        case 'círculo':
            resultado = datos.r * datos.r * Math.PI
            break;
        default:
            break;
    }

    return resultado.toFixed(2)
}


// Uso o invocacion

function probar() {

    let sFigura = 'triánguLO'
    let oDatos = {h:12.3, b: 10.5}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'cuadrado'
    oDatos = {l: 10}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'circulo'
    oDatos = {r: 10}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'pentagono'
    console.log(calcularArea(sFigura, oDatos))
    
}

probar()





