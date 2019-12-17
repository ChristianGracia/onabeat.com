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
      "http://www.onabeat.com/api/videos/create-video",
      options
    );
    const video = await response.json();
    if (video.name != this.state.name) {
      alert("Video posted");
      this.setState({
        name: "",
        description: "",
        videoUrl: ""
      });
    } else {
      alert("error posting video");
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
          Add a video
        </span>

        <form onSubmit={this.onSubmit}>
          <TextInput
            placeholder="Name of video"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            style={{ maxWidth: 320 }}
          />
          <p>
            Enter only the random letters/numbers after www.youtube.com/watch?v=
          </p>
          <TextInput
            placeholder="Video youtube url"
            name="videoUrl"
            type="text"
            value={this.state.videoUrl}
            onChange={this.onChange}
          />

          <span style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
            Optional
          </span>

          <TextInput
            placeholder="Description of video"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.onChange}
          />

          <div
            style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
          >
            <span>Video name: {this.state.name}</span>
            <span>Description: {this.state.description}</span>
            <span>
              Video Url: https://www.youtube.com/watch?v={this.state.videoUrl}
            </span>

            <p
              style={{
                color: "red",
                fontWeight: "bold"
              }}
            >
              Video url should look like =
              https://www.youtube.com/watch?v=ZZ5LpwO-An4
            </p>
          </div>

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
