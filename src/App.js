import React from 'react';
import HomePage from "./pages/home-page/home-page.component"
import './App.scss';

function App() {
  return (
    <div className="App" style={{ flex: 1 }}>
      <div style={{ padding: "5vh" }}></div>
      <HomePage />
      <p style={{ fontWeight: "bold", fontSize: 30 }}>coming soon</p>
      <div style={{ paddingBottom: 100 }}></div>
    </div>

  );
}

export default App;
