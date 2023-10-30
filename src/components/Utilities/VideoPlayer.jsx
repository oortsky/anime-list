"use client";

import Youtube from "react-youtube";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const VideoPlayer = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showXBtn, setShowXBtn] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen(prevState => !prevState);
  };

  const onReady = event => {
    const player = event.target;
    player.pauseVideo();
    setShowXBtn(true);
  };

  const onError = error => {
    let timerInterval;
    MySwal.fire({
      position: "top-end",
      title: "Oops...",
      html: "Sorry! Video is broken, please try another.",
      showConfirmButton: false,
      timer: 4500,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  };

  const opts = {
    width: "299",
    height: "168"
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <div className="indicator">
          <div className="indicator-item indicator-start">
            {showXBtn ? (
              <button
                onClick={handleVideoPlayer}
                className="btn btn-warning btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : null}
          </div>
          <div className="rounded-lg border-2 border-warning overflow-hidden shadow-2xl shadow-black">
            <Youtube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onEnd={handleVideoPlayer}
              onError={onError}
            />
          </div>
        </div>
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="btn btn-warning fixed bottom-4 right-4 shadow-2xl shadow-black"
    >
      Watch Trailer
    </button>
  );
};

export default VideoPlayer;
