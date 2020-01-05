import React from "react";
// import logo from "../../assets/logo.PNG";
import "./artists-page.styles.scss";

const ArtistsPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    {/* <div className="logo mr-auto ml-auto">
      <div
        className="logo-image"
        style={{
          backgroundImage: `url(
            ${logo}
          )`,
          backgroundRepeat: "no-repeat"
        }}
      />
    </div> */}
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>Artists</p>

      <span style={{ color: "#000", fontSize: 25, marginTop: 20, fontWeight: "bold" }}><span style={{ color: "#F8D208" }}>Agostino</span> - am@onabeat.com</span>
    </div>
  </div>
);
export default ArtistsPage;
