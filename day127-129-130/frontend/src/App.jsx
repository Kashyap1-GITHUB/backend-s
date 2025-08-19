import React, { useState } from "react";
import FaceDetection from "./Components/FaceDetection";
import Moodsonges from "./Components/Moodsonges";

const App = () => {
  const [Songs, setSongs] = useState([]);
  return (
    <>
      <h2>Facial Expression Detection</h2>

      <FaceDetection setSongs={setSongs} />
      <Moodsonges Songs={Songs} />
    </>
  );
};
export default App;
