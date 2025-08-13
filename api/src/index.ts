import express from 'express';
import {notifyQueue} from './queue.js';
const app = express();
app.use(express.json())
const PORT = 8000;

app.post('/notify/send',async (req,res)=>{
    try{
        const {userId="adarsh",message="message"} = req.body;
        const jobId = userId+message;
        await notifyQueue.add('send-message',{userId,message},{jobId,
             removeOnComplete: { age: 24*3600 },  
             removeOnFail:     { age: 7*24*3600 }
        })
        res.status(200).json({msg:'success'});
    }catch(e){
        res.status(500).json({msg:'error'});
    }
})

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

