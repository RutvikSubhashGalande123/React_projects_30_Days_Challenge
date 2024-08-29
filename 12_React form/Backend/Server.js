import express from "express";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", data: req.body });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
