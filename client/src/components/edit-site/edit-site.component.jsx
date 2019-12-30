import React from "react";
import { Button } from "react-bootstrap";
import CreateVideoForm from "../create-video-form/create-video-form.component";
import DeleteVideoForm from "../delete-video-form/delete-video-form.component";
import RegisterForm from "../register-form/register-form.component";
import CreateSpotifyForm from "../create-spotify-form/create-spotify-form.component";
import DeleteSongForm from "../delete-song-form/delete-song-form.component";
import ChangeLayoutForm from "../change-layout-form/change-layout-form.component";
import CreateSoundcloudForm from "../create-soundcloud-form/create-soundcloud-form.component";
import CreateBlockForm from "../create-block-form/create-block-form.component"
import DeleteBlockForm from "../delete-block-form/delete-block-form.component"
import CreateGifForm from "../create-gif-form/create-gif-form.component"
import CreatePicForm from "../create-pic-form/create-pic-form.component"
import DeletePicForm from "../delete-pic-form/delete-pic-form.component"
import DeleteGifForm from "../delete-gif-form/delete-gif-form.component"

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVideo: false,
      showRegister: false,
      showDeleteVideo: false,
      showAddSpotify: false,
      showAddSoundCloud: false,
      showDeleteSong: false,
      showChangeLayout: false,
      showAddContentBlock: false,
      showDeleteContentBlock: false,
      showAddGif: false,
      showAddPic: false,
      showDeleteGif: false,
      showDeletePic: false,

      songSelect: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    let name = e.nativeEvent.target.name;
    this.setState({
      showAddVideo: false,
      showRegister: false,
      showDeleteVideo: false,
      showAddSpotify: false,
      showDeleteSong: false,
      showChangeLayout: false,
      showAddSoundCloud: false,
      showAddContentBlock: false,
      showDeleteContentBlock: false,
      showAddPic: false,
      showAddGif: false,
      showDeletePic: false,
      showDeleteGif: false
    });
    switch (name) {
      case "add-video":
        this.setState({ showAddVideo: true });
        break;
      case "delete-video":
        this.setState({ showDeleteVideo: true });
        break;
      case "add-song-spotify":
        this.setState({ showAddSpotify: true });
        break;
      case "add-song-soundcloud":
        this.setState({ showAddSoundCloud: true });
        break;
      case "add-media-block":
        this.setState({ showAddContentBlock: true });
        break;
      case "remove-media-block":
        this.setState({ showDeleteContentBlock: true });
        break;
      case "add-pic":
        this.setState({ showAddPic: true });
        break;
      case "remove-pic":
        this.setState({ showDeletePic: true });
        break;
      case "add-gif":
        this.setState({ showAddGif: true });
        break;
      case "remove-gif":
        this.setState({ showDeleteGif: true });
        break;
      case "delete-song":
        this.setState({ showDeleteSong: true });
        break;
      case "register":
        this.setState({ showRegister: true });
        break;
      case "edit-site":
        this.setState({ showChangeLayout: true });
        break;
      default:
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
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Youtube
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
              Spotify
            </span>

            <Button
              onClick={this.handleClick}
              name="add-song-spotify"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add a song
            </Button>
            <Button
              onClick={this.handleClick}
              name="delete-song"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a song
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              SoundCloud
            </span>

            <Button
              onClick={this.handleClick}
              name="add-song-soundcloud"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add a song
            </Button>
            <Button
              onClick={this.handleClick}
              name="delete-song"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a song
            </Button>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Pic
            </span>

            <Button
              onClick={this.handleClick}
              name="add-pic"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add a pic{" "}
            </Button>
            <Button
              onClick={this.handleClick}
              name="remove-pic"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a pic{" "}
            </Button>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Loop/Gif
            </span>

            <Button
              onClick={this.handleClick}
              name="add-gif"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add a gif{" "}
            </Button>
            <Button
              onClick={this.handleClick}
              name="remove-gif"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove a gif{" "}
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
              Media Block
            </span>

            <Button
              onClick={this.handleClick}
              name="add-media-block"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Add media block{" "}
            </Button>
            <Button
              onClick={this.handleClick}
              name="remove-media-block"
              style={{ margin: 5, fontWeight: "bold" }}
            >
              Remove media block{" "}
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
          {this.state.showAddSpotify ? <CreateSpotifyForm /> : null}
          {this.state.showAddSoundCloud ? <CreateSoundcloudForm /> : null}
          {this.state.showAddContentBlock ? <CreateBlockForm /> : null}
          {this.state.showDeleteContentBlock ? <DeleteBlockForm /> : null}
          {this.state.showDeleteSong ? <DeleteSongForm /> : null}
          {this.state.showChangeLayout ? <ChangeLayoutForm /> : null}
          {this.state.showAddPic ? <CreatePicForm /> : null}
          {this.state.showAddGif ? <CreateGifForm /> : null}
          {this.state.showDeletePic ? <DeletePicForm /> : null}
          {this.state.showDeleteGif ? <DeleteGifForm /> : null}
        </div>
      </div>
    );
  }
}

export default EditSite;
