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
    <p>dashboard</p>

    <Button></Button>
  </div>
);
export default DashboardPage;
