var btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', function () {
    var cajaUno = document.querySelector('#cajaUno');
    var cajaDos = document.querySelector('#cajaDos');
    var chxUno = document.querySelector('#chxUno');

    /* replaceAll - trimStart - trimEnd */

    console.log(cajaUno.value)
    console.log(cajaDos.value);

    /* replaceAll */
    /* cambiar 'esto' por 'con esta cadena de caracteres jugaremos' */
    /*   var textoNuevo = cajaUno.value.replaceAll('esto', 'esta cadena de caracteres');
        console.log(textoNuevo);
        cajaUno.value = textoNuevo;
        console.log(cajaUno.value) */

    var nombre = prompt('ingresa tu nombre');

    /* Interpolacion */
    /* `esta cadena de caracteres ${nombre}` esto es un ejemplo de interpolacion */
    /* Al apretar el boton pediremos el nomrbe mediante un prompt y
dicho nombre hay que agretgarlo a la cadena actualizada */

    cajaUno.value = cajaUno.value.replaceAll('esto', `esta cadena de caracteres ${nombre}`);
    console.log(cajaUno.value);


    /* expresioens regulares */
    /* En la caja dos, todo texto que se incorpore se debe cambiar de mayusculas a minuscula
    o viceversa */

    var regexUno = new RegExp(/[adf]/, 'gi'); /* gi = global ignore */
    var regexDos = /a/gi;


    cajaDos.value = cajaDos.value.replaceAll(regexUno, function (match) {
        return match === 'a' ? 'A' : 'a';
        /*   if (match == 'a') {
            return 'A';
        }else{
            return 'a';
        } */
    });

    /* trimStart . trimEnd */

    cajaUno.value = cajaUno.value.trimEnd();

});


/* template string - back ticks */