import React from "react";
import logo from "../../assets/logo.png";
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";
import SpotifyBox from "../../components/spotify-box/spotify-box.component";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import ContentBlockBox from "../../components/content-block-box/content-block-box.component";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 30
      }}
    >
      <ContentBlockBox />
      <p style={{ marginTop: 30, fontStyle: "italic", color: "red", fontSize: 20 }}>New content will be coming every week</p>
      <div
      // className="row"
      // style={{ justifyContent: "center", alignItems: "center" }}
      >
        {/* <Fade left>
          <div style={{ marginTop: 30 }}>
            <p
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#F8D100"
              }}
            >
              Music
            </p>
          </div>
        </Fade> */}
        {/* <div style={{ margin: 20, marginTop: 30 }}>
          <SpotifyBox />
        </div>
        <div style={{ padding: 10 }}></div>
        <div>
          <p style={{ fontSize: 40, fontWeight: "bold", color: "#F8D100" }}>
            Videos
          </p>

          <VideoBox />
        </div> */}
      </div>
      <div>
        <Signature />
      </div>
    </div>
  </div>
);
export default HomePage;
