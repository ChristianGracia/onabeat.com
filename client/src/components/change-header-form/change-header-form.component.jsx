import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class ChangeLayoutForm extends React.Component {
  constructor() {
    super();

    this.state = {
      header: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const newHeader = {
      header: this.state.header
    };
    console.log(newHeader);

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newHeader)
    };

    const response = await fetch(
      "https://www.onabeat.com/api/header/create-header",
      options
    );
    const header = await response.json();
    if (header.headerString === this.state.header) {
      alert("header posted");
      this.setState({
        header: ""
      });
    } else {
      alert("Error posting header");
    }
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <form onSubmit={this.onSubmit}>
          <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
            Edit Site Header
          </span>

          <TextInput
            placeholder="Name of site header"
            name="header"
            type="text"
            value={this.state.header}
            onChange={this.onChange}
            style={{ maxWidth: 320 }}
          />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default ChangeLayoutForm;
