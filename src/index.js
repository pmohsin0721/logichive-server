const express = require("express");
const mongoose = require("mongoose");
const CardItem = require("./CardData");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/logic_hive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.use(express.json());
app.use(cors());

app.get("/open", async (req, res) => {
  const data = await CardItem.find();
  res.send(data);
});

app.post("/save", (req, res) => {
  const data = req.body;
  const NewInfo = new CardItem(data);
  NewInfo.save((err) => {
    if (err) {
      res.status(500).json({ msg: "sorry" });
      return;
    }
    return res.json({ mes: "done" });
  });
});

app.listen(8080);
