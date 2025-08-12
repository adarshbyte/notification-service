import { Queue } from 'bullmq';

const newQueue = new Queue('notify',{
    connection:{
        host: process.env.QUEUE_HOST,
        port:6379
    }
})
newQueue.add('/send-msg',{
    phone:'9508103357',
    message:'hello bhai! bull mq ka job agya'
})
