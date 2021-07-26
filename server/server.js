const express = require('express')
const cors = require("cors")
const ctrl = require("./controller")
const path = require('path')

const app = express()

app.use(express.json());
app.use(cors());
app.use(express.static("public"));


//Requests:
app.get('/api/weights/',ctrl.getWeights)


//Server setup:
const port = process.env.PORT || 4005

app.listen(port,() => {
    console.log(`Server is running on ${port}`)
})