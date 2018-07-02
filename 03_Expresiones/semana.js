/**
 * 
 * @param 'Dia de la semana'
 * @return 'Hora de la alarma' -> 7:00 // 12:00
 *          y "comenza el <Día>" 
 *  
 */

function despertador(dia) {
    let hora = '12:00'
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
            hora = '12:00'
            dia = 'Sábado'
            break;
        case 'D':
            hora = '12:00'
            dia = 'Domingo'  
            break;
        default:
            hora = '0:00'
            dia = "Error de día"
    }
    return `${hora}, comenza el ${dia}`
}

function despertadorSinDia(dia) {
    let hora = '12:00'
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
        case 'D':
            hora = '12:00'
            dia = 'Domingo'  
            break;
        default:
            hora = '0:00'
            dia = "Error de día"
    }
    return `${hora}, comenza el ${dia}`
}


function probar () {
    let dia = 'L'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'M'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'S'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'D'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'Z'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
}

let z = 1
let d = 'Pepe'
let x
let b = true
let o = {}
let a = []

//if ( a.length != 0) {
    if (a.length) {
        probar(a)
    } else {
        console.log('Adios')
    }
    
    
    // if ( a.length == 0) {
    if (!a.length) {
        console.log('Adios')
    } else {
        probar(a)
    }
    
    /* let a = 'Pepe'
// let saludo = 'Hola ' + a
let saludo = `Hola ${a}` */
    
let a = 'Pepe'
let saludoOld = 'Hola ' + a
let saludo = `Hola ${a}`

