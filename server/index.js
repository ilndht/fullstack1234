import Express from 'express'

import config from '@config'

import Mongoose from 'mongoose'

import v1Router from '@routes'

import path from 'path'

import Webpack from 'webpack'

import webpackConfig from '../webpack.config'

import WebpackDevMiddleware from 'webpack-dev-middleware'

// create database connection with .env file
Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

// express server 
const app = Express()
const compiler = Webpack(webpackConfig)

app.use(WebpackDevMiddleware(compiler))
app.use(v1Router)
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})

// 3000 : local host port

app.listen(3000, () => {
    console.log('server started succesfully  ')
})
