import React from "react";
import logo from "../../assets/logo.png";
import "./home-page.styles.scss";
import Signature from "../../components/common/signature/Signature.component";
import ContentBlockBox from "../../components/content-block-box/content-block-box.component";

import JoinEmailList from "../../components/join-email-list/join-email-list.component";
import SiteHeader from "../../components/site-header/site-header.component";

import Bounce from "react-reveal/Bounce";
import LazyLoad from "react-lazyload";

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

      <LazyLoad height={200}>
        <div className="music-title">
          <SiteHeader />
        </div>
      </LazyLoad>
    </Bounce>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <JoinEmailList />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 7
      }}
    >
      <ContentBlockBox />

      <div style={{ marginTop: 100 }}>
        <Signature />
      </div>
    </div>
  </div>
);
export default HomePage;
