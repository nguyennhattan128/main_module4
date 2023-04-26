import express from "express";
import {AppDataSource} from "./src/data_source";
import router from "./src/router/router";
import bodyParser from "body-parser";


const app = express();

AppDataSource.initialize().then(()=>{
    console.log('connect database success')
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('',router)

app.listen(3000,()=>{
    console.log('server is running')
})