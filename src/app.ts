import express from "express";
import { StringCalculator } from "StringCalculator";

const app = express();
const calculator = new StringCalculator();
app.get("/healthcheck", (req, res) => {
  res.send("Server is running");
});


const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
