import  Express  from "express"

import config from "./config"

import Mongoose from "mongoose"

import v1Router from './routes';


// create database connection with .env file 
Mongoose.connect(config.databaseUrl , {useNewUrlParser:true})



const app  = Express()

app.use(v1Router)



// 3000 : local host port 

app.listen(3000, ()  => {
    console.log('server started succesfully  ')
})