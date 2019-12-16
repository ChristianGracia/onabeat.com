import React from "react";
import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Button } from "react-bootstrap";

class DeleteSongForm extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      currentSongName: "",
      currentSongId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async componentDidMount() {
    const response = await fetch("api/songs/all");
    const songs = await response.json();

    this.setState({ songs: songs });
    console.log(songs);
  }
  async onSubmit(e) {
    e.preventDefault();
    let id = e.nativeEvent.target.value;
    console.log(e.nativeEvent.target.value);
    this.setState({
      currentSongName: e.nativeEvent.target.name,
      currentSongId: id
    });
  }
  async handleDelete(e) {
    const options = {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    };
    const response = await fetch(
      `http://www.onabeat.com/api/songs/delete-song/${this.state.currentSongId}`,
      options
    );

    const songs = await response.json();
    console.log(songs);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
          Remove a song
        </span>

        <DropdownButton id="dropdown-item-button" title="Song List">
          {this.state.songs.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
            >
              {x.name} - {x.artist}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <div>
          <p>{this.state.currentSong}</p>
          {this.state.currentSongName != "" ? (
            <Button onClick={this.handleDelete} variant="danger">
              Delete Song
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DeleteSongForm;
