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

    const song = await response.json();

    if (song.name === this.state.name) {
      alert("Song posted");
      this.setState({
        name: "",
        artist: "",
        songUrl: ""
      });
    } else {
      alert("Error posting song");
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
        <form
          onSubmit={this.onSubmit}
          style={{
            maxWidth: 320
          }}
        >
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
            placeholder="Spotify embed url"
            name="songUrl"
            type="text"
            value={this.state.songUrl}
            onChange={this.onChange}
          />
          <div style={{ marginTop: 20 }}>
            <p>To get spotify embed url...</p>
            <p>
              Right click share and then copy embed code and paste that
              somewhere
            </p>
            <p>Paste the part this red part into spotify embed url field.</p>
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                width: "99%"
              }}
            >
              https://open.spotify.com/embed/ track/72fYhRjY4wMDYsYNt4pI6p
            </span>
          </div>

          <div
            style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
          >
            <span>Song name: {this.state.name}</span>
            <span>Artist: {this.state.artist}</span>
            <span>Song Url: {this.state.songUrl}</span>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
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
