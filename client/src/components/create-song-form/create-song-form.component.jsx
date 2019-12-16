import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreateSongForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      artist: "",
      songUrl: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const newSong = {
      name: this.state.name,
      artist: this.state.artist,
      songUrl: this.state.songUrl
    };
    console.log(newSong);

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newSong)
    };

    const response = await fetch(
      "http://www.onabeat.com/api/songs/create-song",
      options
    );
    // const videos = await response.json();
    const songs = await response.json();
    console.log(songs);
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={this.onSubmit}>
          <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
            Add a song
          </span>

          <TextInput
            placeholder="Name of song"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Artist name"
            name="artist"
            type="text"
            value={this.state.artist}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Spotify url"
            name="songUrl"
            type="text"
            value={this.state.songUrl}
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

export default CreateSongForm;
