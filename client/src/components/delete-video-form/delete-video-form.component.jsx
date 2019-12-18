import React from "react";
// import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Button } from "react-bootstrap";

class DeleteVideoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      currentVidName: "",
      currentVidId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async componentDidMount() {
    const response = await fetch("api/videos/all");
    const videos = await response.json();

    this.setState({ videos: videos });
    console.log(videos);
  }
  async onSubmit(e) {
    e.preventDefault();
    let id = e.nativeEvent.target.value;
    console.log(e.nativeEvent.target.value);
    this.setState({
      currentVidName: e.nativeEvent.target.name,
      currentVidId: id
    });
  }
  async handleDelete(e) {
    const options = {
      method: "DELETE"
    };
    let id = this.state.currentVidId;
    const response = await fetch(`/api/videos/${id}`, options);
    const video = await response.json();
    console.log(video);

    if (video.success != undefined) {
      alert("delete video sucess");
      this.setState({
        currentVidName: "",
        currentVidId: ""
      });
    } else {
      alert("error");
    }
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
          Remove a video
        </span>

        <DropdownButton id="dropdown-item-button" title="Video List">
          {this.state.videos.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
            >
              {x.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <div>
          <p>{this.state.currentVid}</p>
          {this.state.currentVidName !== "" ? (
            <Button onClick={this.handleDelete} variant="danger">
              Delete Video
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DeleteVideoForm;
