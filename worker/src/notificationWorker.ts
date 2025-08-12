import { Worker } from "bullmq";
import IORedis from 'ioredis';

const connection  = new IORedis(({
  host: process.env.QUEUE_HOST, 
  port: 6379,
  maxRetriesPerRequest: null, 
}));

const worker = new Worker('notify',async (job)=>{
    console.log(job.name,job.data,"processed");
},{connection});
worker.on('completed', (job) => {
  console.log(` Job ${job.id} completed`)
})