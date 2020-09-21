import React from "react";

import "./Video.css";

function Video() {
  return (
    <div className="video-container">
      <video
        autoPlay="autoplay"
        muted="muted"
        playsInline="playsinline"
        loop="loop"
      >
        <source src="./assets/videos/ddgvideocompressed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
