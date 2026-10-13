const { Queue, Worker } = require("bullmq");
const IORedis = require("ioredis");

const redisConnection = new IORedis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

// Queues
const followUpQueue = new Queue("followUpQueue", { connection: redisConnection });

// Workers
let ioRef; // socket reference
const followUpWorker = new Worker(
  "followUpQueue",
  async (job) => {
    const { userId, leadId, followUpDateTime, message } = job.data || {};
    if (!ioRef) return;

    if (userId) {
      ioRef.to(`user:${userId}`).emit("followUpNotification", {
        userId,
        leadId,
        followUpDateTime,
        message: message || "You have a scheduled follow-up.",
      });
    } else {
      ioRef.emit("followUpNotification", {
        userId,
        leadId,
        followUpDateTime,
        message: message || "You have a scheduled follow-up.",
      });
    }
  },
  { connection: redisConnection }
);

function attachIO(io) {
  ioRef = io;
}

module.exports = { redisConnection, followUpQueue, followUpWorker, attachIO };
