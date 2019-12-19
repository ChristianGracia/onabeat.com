import React from "react";
import logo from "../../assets/logo.PNG";
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";
import SpotifyBox from "../../components/spotify-box/spotify-box.component";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
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
        justifyContent: "center"
      }}
    >
      <div
      // className="row"
      // style={{ justifyContent: "center", alignItems: "center" }}
      >
        <SpotifyBox />
        <div style={{ padding: 10 }}></div>
        <div>
          <VideoBox />
        </div>
      </div>
      <div>
        <Signature />
      </div>
    </div>
  </div>
);
export default HomePage;
