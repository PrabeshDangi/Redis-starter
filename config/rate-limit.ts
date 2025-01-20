import Redis from "ioredis";
import rateLimit from "ioredis-ratelimit";

const redisClient = new Redis(process.env.REDIS_URL as string);

export const limiter = rateLimit({
  client: redisClient,
  key: (req) => `limiter:${req.ip}`, // Use IP address as the key
  limit: 10, // Allow 10 requests
  duration: 1000, // per second (1000 ms)
  difference: 100, // Minimum interval between requests in milliseconds
});
