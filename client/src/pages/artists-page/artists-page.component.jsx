import React from "react";
import logo from "../../assets/logo.PNG";
import "./artists-page.styles.scss";

const ArtistsPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <div className="logo mr-auto ml-auto">
      <div
        className="logo-image"
        style={{
          backgroundImage: `url(
            ${logo}
          )`,
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
    <p>Artists</p>
  </div>
);
export default ArtistsPage;
