import React from "react";
import logo from "../../assets/logo.PNG";
import "./home-page.styles.scss";
import VideoBox from "../../components/video-box/video-box.component";

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

    {/* <div
      className="row"
      style={{ justifyContent: "center", alignItems: "center" }}
    > */}
    {/* <iframe
        src="https://open.spotify.com/embed/track/1fcJd3YvKhhpo13mUpcUwP"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <iframe
        src="https://open.spotify.com/embed/track/7y8qzwuKCN43ntWCCFEEGy"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe> */}
    {/* </div>
    <div style={{ padding: 15 }}></div> */}
    <div
    // className="row"
    // style={{ justifyContent: "center", alignItems: "center" }}
    >
      {" "}
      {/* <iframe
        className="mr-0 ml-0"
        width="360"
        height="315"
        src="https://www.youtube.com/embed/yXxhHFeprk0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <VideoBox />
    </div>

    <p style={{ marginTop: 10 }}>Full site coming soon...</p>
  </div>
);
export default HomePage;
