import React from "react";
import logo from "../../assets/logo.PNG";
import "./dashboard-page.styles.scss";

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
  </div>
);
export default DashboardPage;
