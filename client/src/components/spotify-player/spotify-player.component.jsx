import React from "react";

const SpotifyPlayer = ({ songUrl, name }) => (
  <div>
    <iframe
      title={name}
      src={songUrl}
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
);

export default SpotifyPlayer;
