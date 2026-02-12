import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world " });
});

app.listen(port, () => {
  console.log(`Server running on port at http://localhost:${port}`);
});
