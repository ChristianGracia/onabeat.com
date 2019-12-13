import React from "react";
import logo from "../../assets/logo.PNG";
import "./create-page.styles.scss";
import CreateVideoForm from "../../components/create-video-form/create-video-form.component";

const CreatePage = () => (
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
    <p>Create</p>
    <CreateVideoForm />
  </div>
);
export default CreatePage;
