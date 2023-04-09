require('dotenv').config() //load our variables from .env

const express = require('express') //pull express libarby
const app = express() //app var to configure server
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error' , (error) => console.error(error))
db.on('open' , () => console.log('Connected to Database'))

app.listen(3000, () => console.log('Server Started'))