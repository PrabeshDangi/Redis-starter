import "dotenv/config";
import express from "express";
import { rateLimiter } from "./middleware/rate-limiter";

const app = express();

app.use(rateLimiter);
app.get("/get", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
