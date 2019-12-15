import React from "react";
import logo from "../../assets/logo.PNG";
import "./login-page.styles.scss";
import LoginForm from "../../components/login-form/login-form.component";

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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>Login</p>
    <LoginForm />
  </div>
);
export default LoginPage;
