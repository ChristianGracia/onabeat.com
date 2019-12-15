import React from "react";
import CreateVideoForm from "../create-video-form/create-video-form.component";
import DeleteVideoForm from "../delete-video-form/delete-video-form.component";
import { Button } from "react-bootstrap";
import RegisterForm from "../register-form/register-form.component";

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVideo: false,
      showRegister: false,
      showDeleteVideo: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    let name = e.nativeEvent.target.name;
    this.setState({
      showAddVideo: false,
      showRegister: false,
      showDeleteVideo: false
    });
    switch (name) {
      case "add-video":
        this.setState({ showAddVideo: true });
        break;
      case "delete-video":
        this.setState({ showDeleteVideo: true });
        break;
      case "register":
        this.setState({ showRegister: true });
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
              name="add-video"
            >
              Add a video
            </Button>
            <Button
              onClick={this.handleClick}
              name="delete-video"
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
          {this.state.showRegister ? <RegisterForm /> : null}
          {this.state.showDeleteVideo ? <DeleteVideoForm /> : null}
        </div>
      </div>
    );
  }
}

export default EditSite;
