function parameters(a,b,c,d) {
    const obj = {}
    a ? obj.a = a : ''
    b ? obj.b = b : ''
    c ? obj.c = c : ''
    d ? obj.d = d : ''

    // No me gusto mi solucion por que podria hacer un ciclo pero no supe
    // como agarrar el nombre de la variable para meterlo en el objeto


    // for (i = 0; i < arguments.length; i++) {
    //     if(arguments[i]) {
    //         obj[arguments[i]] = arguments[i]
    //     }
    // }
    console.log(obj)
}

parameters(1,'jhjio',0,4)