import express from 'express';
import {notifyQueue} from './queue';
const app = express();

const PORT = 8000;

app.get('/',(_req,res)=>{
    res.send('HELLOW FROM TYPESCRIPT + EXPRESSS')
   
    notifyQueue.add('/send-msg',{
        phone:'9508103357',
        message:'hello bhai! bull mq ka job agya'
    })
})

app.listen(PORT,()=>{
    console.log('server running on port 8000')
})

