import React from "react";
import logo from "../../assets/logo.PNG";
import "./login-page.styles.scss";
import LoginForm from "../../components/login-form/login-form.component";
import LightSpeed from "react-reveal/LightSpeed";
import Tada from "react-reveal/Tada";

const LoginPage = () => (
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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>
      Site Dashboard Login
    </p>
    <LoginForm />
    <LightSpeed left>
      <p style={{ marginTop: 20, color: "red", fontSize: 14 }}>
        Only <span style={{ fontWeight: "bold", color: "red" }}>On a Beat</span>{" "}
        members have the ability create accounts
      </p>
    </LightSpeed>
    <Tada>
      {" "}
      <p style={{ fontWeight: "bold", color: "red", fontSize: 25 }}>
        For now...
      </p>
    </Tada>
  </div>
);
export default LoginPage;
