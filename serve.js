const express = require('express')

const app = express()
app.use(express.json())
const PORT = 3000


function reverseString(cad) {
    return cad.split('').reverse().join("")
}

app.get('/reverseString/:cad', (req,res) => {

    if(req.params.cad) {
        const invertString = reverseString(req.params.cad)
        res.status(201).json({success: true, data:invertString})
    } else {
        res.status(500).json({success:false, data:'Undefined param'})
    }

})


app.listen(PORT,() => {
    console.log('running')
})