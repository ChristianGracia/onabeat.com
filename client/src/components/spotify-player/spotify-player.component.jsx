import React from "react";

const SpotifyPlayer = ({ songUrl, name }) => (
  <div>
    <iframe
      title={name}
      src={songUrl}
      width="250"
      height="250"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
);

export default SpotifyPlayer;
