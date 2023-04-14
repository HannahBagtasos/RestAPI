//require('dotenv').config() //load our variables from .env

const express = require('express') //pull express libarby
const app = express() //app var to configure server
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error' , (error) => console.error(error))
db.once('open' , () => console.log('Connected to Database'))

//app.use(express.json()) //let server accept JSON

//const usersRouter = require('./routes/users')
//app.use('/users', usersRouter)


app.listen(3000, () => console.log('Server Started'))