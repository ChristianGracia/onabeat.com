import React from "react";
import logo from "../../assets/logo.PNG";
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";
import SpotifyBox from "../../components/spotify-box/spotify-box.component";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

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
        <Fade left>
          <div style={{}}>
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
        </Fade>
        <div style={{ margin: 20 }}>
          <SpotifyBox />
        </div>
        <div style={{ padding: 10 }}></div>
        <div>
          <p style={{ fontSize: 40, fontWeight: "bold", color: "#F8D100" }}>
            Videos
          </p>

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
