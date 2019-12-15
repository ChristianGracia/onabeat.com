import React from "react";
import CreateVideoForm from "../create-video-form/create-video-form.component";
import { Button } from "react-bootstrap";

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVideo: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    let name = e.nativeEvent.target.name;

    switch (name) {
      case "add-a-video":
        this.setState({ showAddVideo: true });
        break;
    }
  };
  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Video
            </span>

            <Button
              style={{ margin: 5, fontWeight: "bold" }}
              onClick={this.handleClick}
              name="add-a-video"
            >
              Add a video
            </Button>
            <Button
              onClick={this.handleClick}
              name="remove-a-video"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a video
            </Button>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Music
            </span>

            <Button
              onClick={this.handleClick}
              name="add-a-song"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add a song
            </Button>
            <Button
              onClick={this.handleClick}
              name="remove-a-song"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a song
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Site
            </span>

            <Button
              onClick={this.handleClick}
              name="edit-site"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Change site layout{" "}
            </Button>
            <Button
              onClick={this.handleClick}
              name="register"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Register new account{" "}
            </Button>
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          {this.state.showAddVideo ? <CreateVideoForm /> : null}
        </div>
      </div>
    );
  }
}

export default EditSite;
