import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreatePicForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      picUrl: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const newGif = {
      name: this.state.name,
      picUrl: this.state.picUrl,
      description: this.state.description
    };
    console.log(newGif);

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newGif)
    };

    const response = await fetch(
      "https://www.onabeat.com/api/pics/create-pic",
      options
    );
    const pic = await response.json();
    if (pic.name === this.state.name) {
      alert("Pic posted");
      this.setState({
        name: "",
        description: "",
        picUrl: ""
      });
    } else {
      alert("Error posting pic");
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
        <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
          Add a Pic
        </span>

        <form onSubmit={this.onSubmit}>
          <TextInput
            placeholder="Name of pic"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            style={{ maxWidth: 320 }}
          />
          <TextInput
            placeholder="Pic url"
            name="picUrl"
            type="text"
            value={this.state.picUrl}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Description of pic (optional)"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.onChange}
          />

          <div
            style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
          >
            <p
              style={{
                color: "red",
                fontWeight: "bold"
              }}
            >
              To get Pic Url, Right click any photo on internet, click Copy
              Image Address, Paste into url bar
            </p>
          </div>
          <img alt="onabeat" height="250" width="250" src={this.state.picUrl} />
          <p>The picture should render here if the image address is correct</p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePicForm;
