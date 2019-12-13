import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreateVideoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      videoUrl: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const newVideo = {
      name: this.state.name,
      videoUrl: this.state.videoUrl,
      description: this.state.description
    };
    console.log(newVideo);

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newVideo)
    };

    const response = await fetch(
      "http:/www.onabeat.com/api/videos/create-video",
      options
    );
    // const videos = await response.json();
    const videos = await response.json();
    console.log(videos);
  }
  render() {
    return (
      <div className="m-auto" style={{ width: "80%" }}>
        <form onSubmit={this.onSubmit}>
          <TextInput
            placeholder="Name of Video"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Description of Video (optional)"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Video youtube url"
            name="videoUrl"
            type="text"
            value={this.state.videoUrl}
            onChange={this.onChange}
          />

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

export default CreateVideoForm;
