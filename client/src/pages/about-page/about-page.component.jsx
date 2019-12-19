import React from "react";
import logo from "../../assets/logo.PNG";
import "./about-page.styles.scss";

const AboutPage = () => (
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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>About</p>

    <div
      style={{
        minWidth: 320,
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p>
        On A Beat is a performance company. We create shows for all occasions
        (parties dinners dances religious services corporate functions &c) and
        locations (clubs, bars, weddings, galleries, churches corners.){" "}
      </p>{" "}
      <p>
        Our ultimate goal is to create pan American symphonies , musicals , and
        operas of unprecedented scale and quality. As the goal presupposes a
        deep familiarity with music , musicians , and music lovers , we will
        play almost anything almost any where.{" "}
      </p>{" "}
      <p>
        Both more and less than a band: we feature a revolving group of artists,
        and can be as big or small or the situation requires. Check our artist’s
        page for past and current collaborators.
      </p>
    </div>
  </div>
);
export default AboutPage;
