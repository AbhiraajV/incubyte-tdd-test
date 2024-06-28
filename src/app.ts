import express from "express";
import { StringCalculator } from "StringCalculator";

const app = express();
const calculator = new StringCalculator();
app.get("/healthcheck", (req, res) => {
  res.send("Server is running");
});

app.get("/calc/add", (req, res) => {
  const numbers = req.query.numbers as string;

  try {
    const result = calculator.add(numbers);
    res.json({ result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
