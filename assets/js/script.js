var btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', function(){
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
    cajaUno.value = cajaUno.value.replaceAll('esto', `esta cadena de caracteres ${nombre}`);
    console.log(cajaUno.value);


    /* Interpolacion */
    /* Al apretar el boton pediremos el nomrbe mediante un prompt y
   dicho nombre hay que agretgarlo a la cadena actualizada */

});

/* template string - back ticks */