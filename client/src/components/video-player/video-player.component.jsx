import React from "react";

const VideoPlayer = ({ videoUrl, name }) => (
  <div>
    <iframe
      title={name}
      width="250"
      height="250"
      src={"https://www.youtube.com/embed/" + videoUrl}
      frameBorder="0"
      allow="autoplay; encrypted-media;"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
