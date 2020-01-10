import React from "react";
import "./signature.styles.scss"

const Signature = () => {
  return (
    <div style={{ color: "black", display: "flex", flexDirection: "column" }}>
      <span style={{ marginTop: 30, fontSize: 20, fontWeight: "bold" }}>
        Site written by{" "}
        <a href="http://www.christiangracia.com">Christian Gracia</a>
        <i
          className="fab fa-react fa-spin"
          style={{ color: "#0082BE", fontWeight: "bold" }}
        ></i>
      </span>
      <a href="http://www.christiangracia.com">christiangracia.com</a>
    </div>
  );
};
export default Signature;
