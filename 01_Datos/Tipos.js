/* Tipos de datos
-ELEMENTALES
    -number
    -string
    -boolean
-REFERENCIADOS
    -object
-undefined */

//TIPOS ELEMENTALES
    //SON INMUTABLES
    //SE UTILIZAN POR VALOR

   /*  let indice
    indice = 1 */


/* lo sobreescribe */

function aumentar(pIndice) {
    pIndice += 1
    return pIndice
}

let indice = 1
indice = 2

indice = aumentar(indice)
console.log(indice) // 2

//Operaciones con elementales

let a = 5
let b = a
a +=5
console.log(a) // 10
console.log(b) // 5



//TIPOS REFERNCIADOS
    //SON MUTABLES
    //SE UTILIZAN POR REFERENCIA

    let oLibro = {
        titulo: 'LOTR',
        indice: 1
    }
    console.log(typeof oLibro)
    console.log(oLibro)
    
    oLibro2 = oLibro
    oLibro.indice = 2
    console.clear()
    console.log(oLibro)
    console.log(oLibro2)

    function aumentarObjeto(pLibro) {
        pLibro.indice += 1
        return pLibro.indice
    }
    
    aumentarObjeto(oLibro)
    console.log(oLibro)