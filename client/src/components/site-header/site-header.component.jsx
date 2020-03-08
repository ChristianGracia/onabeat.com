import React from "react";
import { Wave } from "react-animated-text";

class Siteheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Loading..."
    };
  }
  async componentDidMount() {
    const response = await fetch("https://www.onabeat.com/api/header/all");
    const header = await response.json();
    this.setState({ header: header[0].headerString });
  }
  render() {
    return (
      <div>
        <Wave text={this.state.header} effect="stretch" effectChange={1.5} />
      </div>
    );
  }
}

export default Siteheader;
