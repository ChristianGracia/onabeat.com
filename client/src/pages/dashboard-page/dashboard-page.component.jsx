import React from "react";
import logo from "../../assets/logo.PNG";
import "./dashboard-page.styles.scss";
import EditSite from "../../components/edit-site/edit-site.component";

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

    <EditSite />
  </div>
);
export default DashboardPage;
