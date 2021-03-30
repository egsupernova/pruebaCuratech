function parameters(a,b,c,d) {
    const obj = {}
    for (i = 0; i < arguments.length; i++) {
        if(arguments[i]) {
            obj[arguments[i]] = arguments[i]
        }
    }
    console.log(obj)
}

parameters(1,'jhjio',null,4,{})