import React from "react";
import logo from "../../assets/logo.PNG";
import "./register-page.styles.scss";
import RegisterForm from "../../components/register-form/register-form.component";

const RegisterPage = () => (
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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>Register</p>
    <RegisterForm />
  </div>
);
export default RegisterPage;
