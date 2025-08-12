import { Queue } from "bullmq";
import IORedis from "ioredis";

const N = Number(process.env.N ?? 50000); // kitne jobs
const connection = new IORedis({
  host: process.env.QUEUE_HOST || "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});
const q = new Queue("notify", { connection });

(async () => {
  const payload = { phone: "9999999999", message: "hi" };
  for (let i = 0; i < N; i++) {
    await q.add("notify", payload, {
      removeOnComplete: true,
      removeOnFail: true,
    });
  }
  await q.close(); await connection.quit();
  console.log("pushed", N);
})();
