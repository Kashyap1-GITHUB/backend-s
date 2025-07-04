const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

// add notes in server
app.post("/note", (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  res.json({
    message: "notes is susesfully add",
  });
});

// delete notes in server;
app.delete("/note/:index", (req, res) => {
  console.log(req.params.index);

  const index = parseInt(req.params.index);
  delete notes[index];

  res.json({
    message: "note deleted susess",
  });
});

//update notes in server
app.patch("/note/:index", (req, res) => {
  const index = parseInt(req.params.index);

  const { title } = req.body;

  notes[index].title = title;

  res.json({
    message: "note update sucessfully ",
  });
});

app.get("/note", (req, res) => {
  console.log(notes),
    res.json({
      notes: notes,
    });
});

app.listen(3000, () => {
  console.log("server is starting ⭐⭐⭐");
});
