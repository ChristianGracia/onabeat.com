import React from "react";

const ContactEmail = () => {
    return (<div style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>

        <span style={{ fontSize: 30, fontWeight: "bold", color: "#F9D518" }}>Contact</span>
        <span style={{ color: "#00", fontSize: 25, marginTop: 20, fontWeight: "bold" }}><span style={{ color: "#F8D208" }}></span> </span>
        <div style={{ textAlign: "center", marginTop: 10, display: "flex", flexDirection: "column" }} className="social-links">
            <span style={{ fontWeight: "bold" }}>Agostino</span>
            <span style={{ padding: 10 }}></span>

            <span>
                <i
                    className="fas fa-envelope"
                    style={{ color: "black", fontSize: 20 }}
                ></i> am@onabeat.com
          </span>
        </div>



    </div>)
}
export default ContactEmail