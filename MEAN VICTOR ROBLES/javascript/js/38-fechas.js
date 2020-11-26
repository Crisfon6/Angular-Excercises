'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var textoHora = `
    El año es : ${year}
    el mes es: ${fecha.getMonth()}
    El dia es : ${fecha.getDate()}
    la hora es: ${fecha.getHours()}
`

console.log(textoHora)