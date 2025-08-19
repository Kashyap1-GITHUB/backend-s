const express = require("express");
const multer = require("multer");
const songModel = require("../models/song.model");
const uploadfile = require("../service/storage.service");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.use(express.json());

router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const filedata = await uploadfile(req.file);

  console.log(filedata);

  const song = await songModel.create({
    title: req.body.title,
    artist: req.body.artist,
    audio: filedata.url,
    mood: req.body.mood,
  });

  console.log(song);

  console.log(happySongs);

  res.status(201).json({
    message: "song creat sussesfully",
    song: filedata,
  });
});

router.get("/songs", async (req, res) => {
  const { mood } = req.query;

  const songs = await songModel.find({ mood:mood });

  res.status(200).json({
    message:"susessfully get data",
    mooddata:songs
  })
});


module.exports = router;
