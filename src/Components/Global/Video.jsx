import React from "react";

import style from "./Video.module.css";

function Video() {
  return (
    <div className={style.videoContainer}>
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
