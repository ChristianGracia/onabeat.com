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
    const videos = await response.json();
    console.log(videos);
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={this.onSubmit}>
          <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
            Add a video
          </span>

          <TextInput
            placeholder="Name of video"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          />
          <p>
            <p>
              Unique YouTube Url: found after https://www.youtube.com/watch?v=
            </p>
            https://www.youtube.com/watch?v=
            <span style={{ backgroundColor: "red", color: "white" }}>
              ZZ5LpwO-An4
            </span>
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
