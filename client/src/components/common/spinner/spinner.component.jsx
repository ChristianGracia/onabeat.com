import React from "react";
import spinner from "../../../assets/spinner";

export default () => {
    return (
        <div height={200} style={{ backgroundColor: "#3993EC" }}>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: "200px", margin: "auto", display: "block" }}
            />
        </div>
    );
};