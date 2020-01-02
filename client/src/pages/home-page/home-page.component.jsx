import React from "react";
import logo from "../../assets/logo.png"
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";
import SpotifyBox from "../../components/spotify-box/spotify-box.component";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import ContentBlockBox from "../../components/content-block-box/content-block-box.component";

import JoinEmailList from "../../components/join-email-list/join-email-list.component"



import Bounce from "react-reveal/Bounce";

const HomePage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <Bounce left>
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
    </Bounce>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <JoinEmailList />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 30
      }}
    >
      <ContentBlockBox />
      <p style={{ marginTop: 30, fontStyle: "italic", color: "black", fontSize: 30, fontWeight: "bold", padding: 10 }}>New content will be coming every week!</p>

      <div>
        <Signature />
      </div>
    </div>
  </div>
);
export default HomePage;
