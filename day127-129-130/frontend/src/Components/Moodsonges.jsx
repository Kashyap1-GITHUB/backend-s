import React, { useState } from "react";
import "../Components/Moodsonges.css"


const Moodsonges = () => {

  const [Songes,setSonges ] = useState([
    {
      title: "title-1",
      artist: "text_ariest1",
      song: "text_song1",
    },
    {
      title: "title-2",
      artist: "text_ariest2",
      song: "text_song2",
    },
    {
      title: "title-3",
      artist: "text_ariest3",
      song: "text_song3",
    },
    {
      title: "title-4",
      artist: "text_ariest4",
      song: "text_song4",
    },
  ]);

  return (
    <div className="main">
        <h2>Recommended songes</h2>
      {Songes.map((songe, index) => (
        <div key={index} className="full-song-title" >
          <div className="title">
            <h2>{songe.title}</h2>
            <p>{songe.song}</p>
          </div>
          <div>
            <i class="ri-play-circle-fill"></i>
            <i class="ri-pause-line"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moodsonges;
