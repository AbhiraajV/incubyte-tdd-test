import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.send("Server is running");
});
export default app;
