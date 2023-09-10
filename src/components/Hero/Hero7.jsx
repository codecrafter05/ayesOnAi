// AyesOnAi/src/components/Hero/Hero7.jsx
import React, { useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as posenet from "@tensorflow-models/posenet";
import "@tensorflow/tfjs";
import "../../scss/css/Camera.css";
import ChatBox from "./ChatBox";

function Camera({ onObjectDetection, onPersonDetection }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const lastPredictionRef = useRef(null);
  const counterRef = useRef(0);
  const detectionCountsRef = useRef({});
  const poseHistory = useRef([]);
  const lastFaceDetectionResultRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const mobilenetModel = await mobilenet.load();
      const posenetModel = await posenet.load();

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.onloadedmetadata = () => {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                videoRef.current.play();

                const runPersonDetection = async () => {
                  while (true) {
                    if (
                      videoRef.current.readyState === 4 &&
                      videoRef.current.videoWidth > 0 &&
                      videoRef.current.videoHeight > 0
                    ) {
                      const poses = await posenetModel.estimateMultiplePoses(
                        videoRef.current,
                        {
                          flipHorizontal: false,
                          maxDetections: 5,
                          scoreThreshold: 0.7,
                          nmsRadius: 30,
                        }
                      );

                      poseHistory.current.push(poses.length);

                      if (poseHistory.current.length > 10) {
                        poseHistory.current.shift();
                      }

                      const avgPoseCount = Math.round(
                        poseHistory.current.reduce((a, b) => a + b, 0) /
                          poseHistory.current.length
                      );

                      let personPhrase = `There are ${avgPoseCount} people in the view.`;
                      lastFaceDetectionResultRef.current = {
                        personPhrase,
                        poses,
                      };

                      // Call the onPersonDetection function here
                      onPersonDetection(avgPoseCount);
                    }

                    await new Promise((resolve) => setTimeout(resolve, 100));
                  }
                };

                const runDetection = async () => {
                  while (true) {
                    if (
                      videoRef.current.readyState === 4 &&
                      videoRef.current.videoWidth > 0 &&
                      videoRef.current.videoHeight > 0
                    ) {
                      const predictions = await mobilenetModel.classify(
                        videoRef.current
                      );
                      predictions.sort((a, b) => b.probability - a.probability);
                      const prediction = predictions[0];

                      if (
                        lastPredictionRef.current &&
                        lastPredictionRef.current === prediction.className
                      ) {
                        counterRef.current += 1;
                      } else {
                        lastPredictionRef.current = prediction.className;
                        counterRef.current = 1;
                      }

                      // Render predictions immediately, regardless of counter
                      renderPredictions(
                        predictions,
                        lastFaceDetectionResultRef.current
                      );

                      // Reset the counter if it meets the threshold
                      if (counterRef.current >= 7) {
                        counterRef.current = 0;
                        // You can update your UI here to show the AI response
                      }

                      // Call the onObjectDetection function here, inside the if statement
                      onObjectDetection(prediction.className);
                    }
                    await new Promise((resolve) => setTimeout(resolve, 100));
                  }
                };

                const renderPredictions = (
                  predictions,
                  faceDetectionResult
                ) => {
                  const canvas = canvasRef.current;

                  if (!canvas) {
                    console.error("Canvas element is not available");
                    return;
                  }

                  const context = canvas.getContext("2d");
                  context.clearRect(0, 0, canvas.width, canvas.height);

                  if (predictions.length === 0) return;

                  const prediction = predictions[0];
                  const parsedPrediction = parsePrediction(
                    prediction.className
                  );
                  const font = "16px sans-serif";
                  context.font = font;
                  context.textBaseline = "top";
                  const x = 10;
                  const y = 10;
                  context.fillStyle = "#00FFFF";
                  const textWidth = context.measureText(
                    prediction.className
                  ).width;
                  const textHeight = parseInt(font, 10);
                  context.fillRect(x, y, textWidth + 4, textHeight + 4);
                  context.fillStyle = "#000000";
                  context.fillText(parsedPrediction, x, y);

                  if (faceDetectionResult && faceDetectionResult.poses) {
                    const personPhrase = faceDetectionResult.personPhrase;

                    faceDetectionResult.poses.forEach(({ keypoints }) => {
                      keypoints.forEach((keypoint) => {
                        if (keypoint.score > 0.2) {
                          context.beginPath();
                          context.arc(
                            keypoint.position.x,
                            keypoint.position.y,
                            5,
                            0,
                            2 * Math.PI
                          );
                          context.fillStyle = "red";
                          context.fill();
                        }
                      });
                    });

                    context.font = "20px Arial";
                    context.fillStyle = "black";
                    context.fillText(personPhrase, 10, 30);
                  }
                };

                const parsePrediction = (prediction) => {
                  let parsedPhrase = "";

                  switch (prediction) {
                    case "watch":
                      parsedPhrase = "There is a watch on top of the table.";
                      break;
                    case "shirt":
                      parsedPhrase = "There is a shirt nearby.";
                      break;
                    case "pin":
                      parsedPhrase = "I can see a pin.";
                      break;
                    case "person":
                      parsedPhrase = "There is a person in the view.";
                      break;
                    default:
                      parsedPhrase = `I detected an object: ${prediction}.`;
                  }

                  return parsedPhrase;
                };

                Promise.all([runDetection(), runPersonDetection()]);
              };
            }
          })
          .catch(function (error) {
            console.log("Failed to get user media", error);
          });
      }
    };

    loadModels();
  }, []);

  return (
    <div className="camera-container">
      <video className="camera-video" ref={videoRef} autoPlay muted />
      <canvas className="camera-canvas" ref={canvasRef} />
      <ChatBox className="chat-box" />
    </div>
  );
}

export default Camera;
