import React from "react";
import logo from "../../assets/logo.PNG";
import "./dashboard-page.styles.scss";

import { Button } from "react-bootstrap";

const DashboardPage = () => (
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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>Dashboard</p>
    <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
      Video
    </span>
    <div>
      <Button
        style={{ padding: 5, margin: 5 }}
        onClick={() =>
          (window.location.href = "http://www.onabeat.com/add-video")
        }
      >
        Add a video
      </Button>
      <Button style={{ padding: 5, margin: 5 }}>Remove a video</Button>
    </div>
    <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
      Music
    </span>
    <div>
      <Button style={{ padding: 5, margin: 5 }}>Add a song</Button>
      <Button style={{ padding: 5, margin: 5 }}>Remove a song</Button>
    </div>

    <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
      Site Layout
    </span>
    <div>
      <Button style={{ padding: 5, margin: 5 }}>Change site layout </Button>
    </div>
  </div>
);
export default DashboardPage;
