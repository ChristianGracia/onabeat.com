import React from "react";

import "./about-page.styles.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const AboutPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    {/* <div className="logo mr-auto ml-auto"> */}
    {/* <div
        className="logo-image"
        style={{
          backgroundImage: `url(
            ${logo}
          )`,
          backgroundRepeat: "no-repeat"
        }}
      />
    </div> */}
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>About Us</p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        color: "red",
        fontSize: 20
      }}
    >
      <Pulse>
        {" "}
        <i style={{ fontSize: 70 }} class="fas fa-drum"></i>
      </Pulse>
      <Fade left>
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 27 }}>
            <span style={{ fontWeight: "bold" }}>On A Beat</span> is a
            performance company...{" "}
          </p>
        </div>{" "}
      </Fade>
      <Fade right>
        <div style={{}}>
          {" "}
          <Fade top cascade>
            <p style={{ marginTop: 20 }}>We create shows for...</p>

            <p>
              all occasions (parties dinners dances religious services corporate
              functions &c)
            </p>
            <p>
              and locations (clubs, bars, weddings, galleries, churches,
              corners.){" "}
            </p>
          </Fade>
        </div>
      </Fade>
      <i style={{ fontSize: 60, margin: 20 }} class="fas fa-guitar"></i>
      <Fade top cascade>
        <div style={{ marginTop: 20 }}>
          <p>
            Our ultimate goal is to create pan American symphonies, musicals,
            and operas of unprecedented scale and quality. As the goal
            presupposes a deep familiarity with music, musicians, and music
            lovers, we will play almost anything almost any where.{" "}
          </p>
        </div>

        <div style={{ marginTop: 20 }}>
          <p>
            Both more and less than a band: we feature a revolving group of
            artists, and can be as big or small or the situation requires. Check
            our artist’s page for past and current collaborators.
          </p>
        </div>
      </Fade>
      <div style={{ marginTop: 20 }}>
        <span style={{ fontWeight: "bold" }}>More content coming soon</span>
      </div>
    </div>
  </div>
);
export default AboutPage;
