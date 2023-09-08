import React, { useEffect, useRef, useState } from "react";

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

function Microphone() {
  const [transcript, setTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionStarted = useRef(false);
  const timerRef = useRef(null);

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
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const text = event.results[i][0].transcript;
          setTranscript(text);
          if (event.results[i].isFinal) {
            setFinalTranscript((prevTranscript) => prevTranscript + " " + text);
            setTimeout(() => {
              setFinalTranscript("");
            }, 5000); // clear finalTranscript after 5 seconds
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
  }, []);

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
      <p>{finalTranscript}</p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Microphone;
