import React from "react";

const VideoPlayer = ({ videoUrl, name }) => (
  <div>
    <iframe
      title={name}
      width="300"
      height="300"
      src={"https://www.youtube.com/embed/" + videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
