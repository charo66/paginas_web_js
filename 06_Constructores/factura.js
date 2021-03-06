function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre 
    this.direccion = direccion 
    this.telefono = telefono 
    this.nif = nif 
}
function Elemento (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura (empresa, tipoIVA, formaPago) {
    this.empresa = empresa
    this.cliente = ''
    this.elementos = []
    this.importeTotal = 0
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
        this.importeTotal = 0
        this.elementos.forEach(
            (item) => {
                this.importeTotal +=
                item.precio*item.cantidad*this.tipoIVA
            }
        )
    }
    this.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
        this.calculaImporteTotal()
        this.pintaDatos()
    }
    this.pintaDatos = function(oDatos = this) {
        for (const key in oDatos) {
            if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
                if (typeof oDatos[key] === 'object') { 
                    if (isNaN(key)) {
                        console.log(`Propiedades de ${key}: `)
                    }
                    this.pintaDatos(oDatos[key])
                } else {
                    console.log(`${key} : ${oDatos[key]}`)
                }    
            }    
        }
    }
}

function crearFactura1() {
    let factura1 = new Factura(
        new Empresa(
            'Boracay Ediciones',
            'c/ Pez',
            '587 349 785',
            'Z-345123876'), 
        1.04, 
        'contado' ) 

    factura1.cliente = 
        new Empresa(
            'Libreria Tuatalug',
            'c/ Tortuga',
            '543 987 654',
            'K-434344343')

    factura1.elementos.push(
        new Elemento (
            'La Isla del Tesora',30,10)
    )

    factura1.elementos.push(
        new Elemento('Dracula', 75, 5)
    )

    factura1.elementos.push(
        new Elemento ('El Señor de loas Anillos', 50, 24)
    )

    //factura1.mostrar()

    factura1.tipo = "Tipo C"

    console.log(factura1)
}

function crearFactura2() {
    let factura1 = new Factura(
        new Empresa(
            'Boracay Ediciones',
            'c/ Pez',
            '587 349 785',
            'Z-345123876'), 
        1.04, 
        'transferencia' ) 

    factura1.cliente = 
        new Empresa(
            'Libreria El Cid',
            'c/ Valencia',
            '543 986 654',
            'K-434894343')

    factura1.elementos.push(
        new Elemento (
            'Frankenstein',30,10)
    )

    factura1.elementos.push(
        new Elemento('La Peste', 75, 5)
    )

    factura1.elementos.push(
        new Elemento ('El Hobbit', 50, 24)
    )

    // factura1.mostrar()    
    console.log(factura1)
}


crearFactura1()
// crearFactura2()