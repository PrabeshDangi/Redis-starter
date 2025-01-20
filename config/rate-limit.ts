import Redis from "ioredis";
import rateLimit from "ioredis-ratelimit";

const redisClient = new Redis(process.env.REDIS_URL as string);

export const limiter = rateLimit({
  client: redisClient,
  key: (req) => `limiter:${req.ip}`, // Use IP address as the key
  limit: 2, // Allow 2 requests
  duration: 5000, // per second (5000 ms)
  difference: 100, // Minimum interval between requests in milliseconds
});
