import React from "react";
import TextInput from "../common/text-input/text-input.component";
import SpotifyPlayer from "../spotify-player/spotify-player.component";

import { Button } from "react-bootstrap";

class CreateSpotifyForm extends React.Component {
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
    if (e.target.name === "songUrl") {
      let url = e.target.value
        .slice(13)
        .split(" ")[0]
        .slice(0, -1);

      this.setState({
        songUrl: url
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  async onSubmit(e) {
    e.preventDefault();

    let url = this.state.songUrl;

    const newSong = {
      name: this.state.name,
      artist: this.state.artist,
      songUrl: url
    };
    console.log(newSong);

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newSong)
    };

    const response = await fetch(
      "https://www.onabeat.com/api/songs/create-song",
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
              Right click share and then copy embed code and paste that into the
              spotify embed url field.
            </p>
          </div>

          <div style={{ marginBottom: 15 }}>
            <SpotifyPlayer songUrl={this.state.songUrl} />
            <span>Song should above should play if entered correctly</span>
          </div>

          <div
            style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
          >
            <span>Song name: {this.state.name}</span>
            <span>Artist: {this.state.artist}</span>
            <span>Spotify embed url: {this.state.songUrl}</span>
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

export default CreateSpotifyForm;
