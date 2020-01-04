import React from "react";

import "./about-page.styles.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import Signature from "../../components/common/signature/Signature.component";
import LightSpeed from 'react-reveal/LightSpeed';
import ContactEmail from "../../components/common/contact-email/contact-email.component"


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
    <p style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>About Us</p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        color: "black",
        fontSize: 20
      }}
    >
      <Pulse>
        {" "}
        <i style={{ fontSize: 70, color: "#F8D101" }} class="fas fa-drum"></i>
      </Pulse>
      <Fade left>
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 27 }}>
            <span style={{ fontWeight: "bold" }}>On A Beat</span> is a
            performance company...{" "}
          </p>
        </div>{" "}
      </Fade>

      <div style={{ marginTop: 60 }}>
        {" "}
        <Fade top cascade>
          <p style={{}}>We create shows for all ...</p>
        </Fade>
        <LightSpeed left cascade>
          <p style={{ fontWeight: "bold", fontSize: 30 }}>Occasions</p>
          <div>
            <Fade right>
              <div><span>parties,</span><span> dinners,</span><span> dances,</span><span> religious services,</span> <span> corporate functions,</span><span> &c</span></div></Fade>
          </div>

          <span>+</span> <p style={{ fontWeight: "bold", fontSize: 30 }}>Locations</p>
          <div>
            <Fade left>
              <div>
                <span>clubs,</span><span>  bars,</span> <span>weddings,</span><span> galleries,</span> <span>churches,</span><span>  corners </span>
              </div>
            </Fade>
          </div>
        </LightSpeed >


      </div>

      <RubberBand>
        <div>
          <i style={{ fontSize: 60, margin: 20 }} class="fas fa-guitar"></i>
        </div>{" "}
      </RubberBand>
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

      <i
        style={{ fontSize: 60, margin: 20 }}
        class="fas fa-globe-americas fa-pulse"
      ></i>

      <ContactEmail />

      <div style={{ marginTop: 40 }}>
        <Zoom left>
          <span style={{ fontWeight: "bold", fontSize: 40 }}>
            More content coming soon
          </span>
        </Zoom>
      </div>

      <div>
        <Signature />
      </div>
    </div>
  </div>
);
export default AboutPage;
