// import React, { useState } from "react";
import { useState } from "react";
import "../Components/Moodsonges.css";

const Moodsonges = ({ Songs }) => {
  const [IsPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (IsPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };

  return (
    <div className="main">
      <h2>Recommended Songs</h2>
      {Songs.map((song, index) => (
        <div key={index} className="full-song-title">
          <div className="title">
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-button">
            {IsPlaying === index && (
              <audio
                src={song.audio}
                style={{
                  display: "none",
                }}
                autoPlay={IsPlaying === index}
              ></audio>
            )}
            <button onClick={() => handlePlayPause(index)}>
              {IsPlaying === index ? (
                <i className="ri-pause-line"></i>
              ) : (
                <i className="ri-play-circle-fill"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moodsonges;
