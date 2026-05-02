import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import connectdb from './dbconnect/dbconnect.js'
import router from './routes/route.js';
import './puppeteer/puppeteer.js'
import './bgw/queueprocess.js'

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/apis",router)

app.listen(3000,async()=>{
    await connectdb.connect(); 
    console.log("server started on the port 3000")
})