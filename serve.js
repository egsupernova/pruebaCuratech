const express = require('express')

const app = express()
app.use(express.json())
const PORT = 3000

app.listen(PORT,() => {
    console.log('running')
})

app.get('/reverseString/:cad', (req,res) => {

    if(req.params.cad) {
        const invertString = reverseString(req.params.cad)
        res.status(201).json({success: true, data:invertString})
    } else {
        res.status(500).json({success:false, data:'Undefined param'})
    }

})

function parameters(a,b,c,d) {
    const obj = {}
    for (i = 0; i < arguments.length; i++) {
        if(arguments[i]) {
            obj[arguments[i]] = arguments[i]
        }
    }
    console.log(obj)
}

function reverseString(cad) {
    return cad.split('').reverse().join("")
}

console.log(reverseString('hello'))
parameters(1,'jhjio',null,4,{})