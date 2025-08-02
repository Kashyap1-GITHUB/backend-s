// components/FaceDetection.js
import React, { useRef } from "react";
import * as faceapi from "face-api.js";
import "../Components/FaceDetection.css"

const FaceDetection = () => {
  const videoRef = useRef();

   const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam:", err));
    };

    const detectExpressions = async () => {
     const video = videoRef.current;

        if (!video || video.paused || video.ended) return;

        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        let mostdection = 0;
        let _expression = "";

        if (!detections || detections.length === 0) {
          console.log("no face dection");
          return;
        }


        for (const expression of Object.keys(detections[0].expressions)) {
          if (detections[0].expressions[expression] > mostdection) {
            mostdection = detections[0].expressions[expression];  
            _expression = expression;
          }
        } 
        
        // console.log(mostdection);
        console.log(_expression);

        // console.log(detections[0].expressions);
        
    };

    loadModels().then(() => {
      startVideo();
      detectExpressions();
    });
  return (
    <div className="mood-element">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="user-video"
      />
      <button onClick={detectExpressions} className="mood-element-b">start Listening</button>
    </div>
  );
};

export default FaceDetection;
