import { Queue } from 'bullmq';

const notifyQueue = new Queue('notify',{
        connection:{
            host: process.env.QUEUE_HOST || 'localhost',
            port:6379
        }
    })
    
export {notifyQueue}