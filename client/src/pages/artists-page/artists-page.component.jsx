import React from "react";
import logo from "../../assets/agostinoPic.JPG";
import "./artists-page.styles.scss";

const ArtistsPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <div style={{ marginTop: 25 }}>
      <span style={{ fontWeight: "bold", fontSize: 30 }}>Artists</span>
    </div>

    <div className="logo" style={{ height: 200, marginTop: 30 }}>
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

    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          color: "#000",
          fontSize: 25,
          marginTop: 40,
          fontWeight: "bold"
        }}
      >
        <span style={{ color: "#F8D208" }}>Agostino</span>{" "}
      </span>
      <div style={{ marginTop: 10, fontSize: 65 }}>
        <i class="fas fa-guitar"></i>
      </div>

      <span
        style={{
          color: "#000",
          fontSize: 25,
          marginTop: 40,
          fontWeight: "bold"
        }}
      >
        <span style={{ color: "#F8D208" }}>Edward Scrimger</span>
      </span>
      <div style={{ marginTop: 10, fontSize: 65 }}>
        <i class="fas fa-drum"></i>
      </div>
      <span
        style={{
          color: "#000",
          fontSize: 25,
          marginTop: 30,
          fontWeight: "bold"
        }}
      >
        <span style={{ color: "#F8D208" }}>Aisling Rafferty</span>
      </span>
      <div style={{ marginTop: 10, fontSize: 65 }}>
        <i class="fas fa-microphone"></i>
      </div>
    </div>
  </div>
);
export default ArtistsPage;
