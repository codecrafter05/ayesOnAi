//AyesOnAI/client/src/components/Microphone.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.lang = "en-US";
} else {
  console.log(
    "Your browser does not support speech recognition software. Try Chrome 25 or later."
  );
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

  const startRecording = () => {
    if (!recognitionStarted.current) {
      recognition.start();
      recognitionStarted.current = true;
      setIsListening(true);
    }
  };

  const stopRecording = () => {
    recognition.stop();
    recognitionStarted.current = false;
    setIsListening(false);

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
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const text = event.results[i][0].transcript;
          setTranscript(text);
          if (event.results[i].isFinal) {
            // Update the ref instead of the state
            finalTranscriptRef.current += " " + text;
            setTimeout(() => {
              setTranscript(""); // Clear the transcript
              stopRecording(); // Stop recognition when the transcript is final
            }, 5000); // clear transcript after 5 seconds
          }
        }
      };

      recognition.onerror = function (event) {
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
      <div>
        <button
          onClick={startRecording}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Start
        </button>
        <button
          onClick={stopRecording}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Stop
        </button>
      </div>
      <p>{transcript}</p>
      {error && <p>{error}</p>}
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
