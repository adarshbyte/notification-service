import { Worker } from "bullmq";
import IORedis from 'ioredis';

const connection  = new IORedis(({
  host: process.env.QUEUE_HOST, 
  port: 6379,
  maxRetriesPerRequest: null, 
}));
const concurrency = Number(process.env.WORKER_CONCURRENCY ?? 5);

const worker = new Worker('notify',async (job)=>{
    console.log("Processing job:", job.id, job.data);

    // Simulate delay for visual demo (1 second per job)
    await new Promise((res) => setTimeout(res, 1000));

    console.log("✅ Done job:", job.id);
},{connection,concurrency});
worker.on('completed', (job) => {
  console.log(` Job ${job.id} completed`)
})