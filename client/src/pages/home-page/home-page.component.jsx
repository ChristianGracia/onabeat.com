import React from "react";
import logo from "../../assets/logo.PNG";
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";
import SpotifyBox from "../../components/spotify-box/spotify-box.component";
import ContentGrid from "../../components/grid/grid-component";

const HomePage = () => (
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

    <div
    // className="row"
    // style={{ justifyContent: "center", alignItems: "center" }}
    >
      <SpotifyBox />
      <div style={{ padding: 10 }}></div>
      <VideoBox />
    </div>

    <p style={{ marginTop: 30, color: "red" }}>
      Site written by{" "}
      <a href="http://www.christiangracia.com">Christian Gracia</a>
      <i
        class="fab fa-react fa-spin"
        style={{ color: "#9CFF00", fontWeight: "bold" }}
      ></i>
    </p>
    <a href="http://www.christiangracia.com">christiangracia.com</a>

    <p style={{ fontWeight: "bold" }}></p>
    <ContentGrid />
  </div>
);
export default HomePage;
