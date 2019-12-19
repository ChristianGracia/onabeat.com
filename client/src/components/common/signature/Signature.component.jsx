import React from "react";

const Signature = () => {
  return (
    <div style={{ color: "#F8D100" }}>
      <p style={{ marginTop: 30, fontSize: 20, fontWeight: "bold" }}>
        Site written by{" "}
        <a href="http://www.christiangracia.com">Christian Gracia</a>
        <i
          class="fab fa-react fa-spin"
          style={{ color: "#0082BE", fontWeight: "bold" }}
        ></i>
      </p>
      <a href="http://www.christiangracia.com">christiangracia.com</a>
    </div>
  );
};
export default Signature;
