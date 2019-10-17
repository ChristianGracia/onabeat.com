import React from "react"


const HomePage = () => (
    <div style={{}}>

        <h1 style={{ fontSize: 70, color: "black" }}>On A Beat</h1>
        <div style={{ fontSize: 48, color: "black" }}>
            <p>Tobias Why</p>
            <div className="row" style={{ justifyContent: "center", alignItems: "center" }}>
                <iframe src="https://open.spotify.com/embed/track/1fcJd3YvKhhpo13mUpcUwP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/7y8qzwuKCN43ntWCCFEEGy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div style={{ padding: 15 }}></div>
            <iframe width="600" height="315" src="https://www.youtube.com/embed/oOO41wFiS4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div >
)
export default HomePage