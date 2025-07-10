const express = require("express");
const connectDB = require("./src/db/db");
const notemodel = require("./src/model/notes.model");

const app = express();

connectDB();

app.use(express.json());

app.post("/note", async (req, res) => {
  const { tital, discription } = req.body;

  console.log({ tital, discription });

  await notemodel.create({
    tital,
    discription,
  });

  res.json({
    Message: "notes created suessesfully",
  });
});

app.get("/", async (req, res) => {
  const notes = await notemodel.find({
    // "_id": "686fa88c382953d4bea40df5",
  });

  res.json({
    Message: "all notes",
    Notes: notes,
  });
});

app.patch(`/note/:id`, async (req, res) => {
  const noteid = req.params.id;
  const { tital } = req.body;

  console.log(noteid);
  console.log({ tital });

  await notemodel.findByIdAndUpdate(
    {
      _id: noteid,
    },
    {
      tital: ` ${tital}`,
    }
  );

  res.json({
    message: "notes update ",
  });
});

app.delete("/note/:id", async (req, res) => {
  const noteid = req.params.id;

  console.log(noteid);

  await notemodel.findByIdAndDelete({
    _id: noteid,
  });

  res.json({
    message: "notes deleted ",
  });
});

app.listen(3000, () => {
  console.log("sever runnig no port 3000 ");
});
