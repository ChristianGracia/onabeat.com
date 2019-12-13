import React from "react";

const VideoPlayer = ({ imgUrl }) => (
  <div>
    <iframe
      width="560"
      height="315"
      src={imgUrl}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

export default VideoPlayer;
