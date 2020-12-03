const express = require('express')

const app = express() // this allows me to use the express framework 

let data = require('./public/database.json')// gives me access to my database


// app.get('/workers', (req, res) => { // Parameters: req = request to user res = response to user
//     res.send('Hello World')
// })

app.get('/workers', (req, res) => {
    if(!data){
        res.status(404).send('Could not find information')
    }
    res.send(data)
})


app.get('/workers/:id', (req, res) =>{
    const findEmployee = data.workers.find((employee) => {
        return parseInt(req.params.id) === employee.id //parseInt converts the string into integer
    })








    if(!findEmployee){
        res.status(404).send('Could not find information')
    }
    res.send(data)
})

app.listen(3000) // it looks for the port and 3000 is the port
