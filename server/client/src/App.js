import React from "react";
import HomePage from "./pages/home-page/home-page.component";
import "./App.scss";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <div className="ml-auto mr-auto" style={{ padding: 10 }}>
        <HomePage />
      </div>

      <div style={{ paddingBottom: 300 }}></div>
    </div>
  );
}

export default App;
