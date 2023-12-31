import React from "react";
import "../../scss/css/Qchat.css";

const Achat = ({ transcript }) => {
  return (
    <>
      <div className="card">
        <div className="titlebar">
          <span className="buttons">
            <button className="minimize">
              <svg x="0px" y="0px" viewBox="0 0 10.2 1">
                <rect x="0" y="50%" width="10.2" height="1"></rect>
              </svg>
            </button>
            <button className="maximize">
              <svg viewBox="0 0 10 10">
                <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
              </svg>
            </button>
            <button className="close">
              <svg viewBox="0 0 10 10">
                <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon>
              </svg>
            </button>
          </span>
        </div>
        <div className="cppcode">
          <pre id="pre">
            <code>
              <span className="s1">{transcript}</span>{" "}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Achat;
