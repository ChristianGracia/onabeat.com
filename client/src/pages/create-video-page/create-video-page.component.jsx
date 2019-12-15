import React from "react";
import logo from "../../assets/logo.PNG";
import "./create-video-page.styles.scss";
import CreateVideoForm from "../../components/create-video-form/create-video-form.component";

const CreateVideoPage = () => (
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
    <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>Create</p>
    <CreateVideoForm />
  </div>
);
export default CreateVideoPage;
