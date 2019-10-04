import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"

const HomePage = () => (
    <div style={{}}>
        <Jumbotron style={{}}>
            <h1 style={{ fontSize: 45, color: "red" }}>On A Beat</h1>
            <p style={{ marginTop: 20, fontWeight: "bold", color: "blue", fontSize: 20 }}>Videos, Music, & More</p>
            <h2 style={{ fontWeight: "bold" }}>Under construction</h2>
            <div style={{ padding: 10 }}></div>
            <a href="https://www.youtube.com/channel/UC2bzDGJGflVc9i4Yfx019Hg">Youtube</a>
            <p style={{ marginTop: 20 }}>Redesign on the way by <a href="http://christiangracia.com">christiangracia.com</a></p>
            <i style={{ fontSize: 40 }} className="fas fa-spinner fa-spin"></i>
        </Jumbotron>
    </div >
)
export default HomePage