//AyesOnAI/client/src/components/Microphone.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../scss/css/Microphone.css";
import { Icon } from "@iconify/react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.lang = "en-US";
} else {
  // console.log(
  //   "Your browser does not support speech recognition software. Try Chrome 25 or later."
  // );
}

function Microphone({
  handleObjectDetection,
  lastFaceDetectionResultRef,
  lastDetectedObject,
  lastPersonCount,
}) {
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionStarted = useRef(false);
  const finalTranscriptRef = useRef(""); // Store finalTranscript in a ref

  const toggleRecording = () => {
    if (recognitionStarted.current) {
      recognition.stop();
      recognitionStarted.current = false;
      setIsListening(false);
      console.log("Listening stopped");

      // Pass the last detected object, person count, and finalTranscript from the ref to handleObjectDetection
      handleObjectDetection(
        lastDetectedObject,
        lastPersonCount,
        finalTranscriptRef.current
      );
      // Clear the ref
      finalTranscriptRef.current = "";
    } else {
      recognition.start();
      recognitionStarted.current = true;
      setIsListening(true);
      console.log("Listening started");
    }
  };

  const stopRecording = () => {
    recognition.stop();
    recognitionStarted.current = false;
    setIsListening(false);
    console.log("Listening stopped");

    // Pass the last detected object, person count, and finalTranscript from the ref to handleObjectDetection
    handleObjectDetection(
      lastDetectedObject,
      lastPersonCount,
      finalTranscriptRef.current
    );
    // Clear the ref
    finalTranscriptRef.current = "";
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = function (event) {
        // console.log("Result event triggered");
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const text = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscriptRef.current += " " + text;
          } else {
            interimTranscript += text;
          }
        }
        setTranscript(interimTranscript);

        // When a final result is obtained, pass it to the back end.
        if (finalTranscriptRef.current) {
          handleObjectDetection(
            lastDetectedObject,
            lastPersonCount,
            finalTranscriptRef.current
          );
          finalTranscriptRef.current = ""; // Clear finalTranscriptRef after it's been handled.
        }
      };

      recognition.onerror = function (event) {
        console.error("Speech recognition error detected:", event.error);
        console.error("Additional error details", event);
        if (event.error === "no-speech") {
          console.log("No speech was detected. Try again.");
        } else {
          setError(`Speech recognition error: ${event.error}`);
        }
      };
    }
  }, [handleObjectDetection]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          height: "25px",
          width: "25px",
          backgroundColor: isListening ? "green" : "red",
          borderRadius: "50%",
          margin: "10px",
        }}
      />
      <div
        className="col-lg-12"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <button
          className="cs-btn cs-style1"
          onClick={toggleRecording}
          style={{
            fontSize: "20px",
            padding: "20px 40px",
            borderRadius: "5px",
          }}
        >
          <span>{isListening ? "Stop" : "Start"}</span>
          <Icon
            icon="bi:arrow-right"
            style={{
              fontSize: "22px",
              marginLeft: "10px",
            }}
          />
        </button>
      </div>
      {error && <p style={{ fontSize: "18px", color: "red" }}>{error}</p>}
    </div>
  );
}

Microphone.defaultProps = {
  handleObjectDetection: () => {},
  lastDetectedObject: null,
  lastPersonCount: null,
};

Microphone.propTypes = {
  handleObjectDetection: PropTypes.func,
  lastFaceDetectionResultRef: PropTypes.object,
  lastDetectedObject: PropTypes.string,
  lastPersonCount: PropTypes.number,
};

export default Microphone;
