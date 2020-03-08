import React from "react";
import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

class CreateBlockForm extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      videos: [],
      pics: [],
      gifs: [],
      firstName: "",
      firstArtist: "",
      firstUrl: "",
      firstType: "",
      secondName: "",
      secondDescription: "",
      secondUrl: "",
      secondType: "",
      thirdName: "",
      thirdDescription: "",
      thirdUrl: "",
      thirdType: "",
      fourthName: "",
      fourthDescription: "",
      fourthUrl: "",
      fourthType: "",
      title: "",
      counter: 0,
      shareUrl: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitBlock = this.onSubmitBlock.bind(this);
  }

  async componentDidMount() {
    const songCall = await fetch("https://www.onabeat.com/api/songs/all");
    const songs = await songCall.json();
    const videoCall = await fetch("https://www.onabeat.com/api/videos/all");
    const videos = await videoCall.json();
    const picCall = await fetch("https://www.onabeat.com/api/pics/all");
    const pics = await picCall.json();
    const gifCall = await fetch("https://www.onabeat.com/api/gifs/all");
    const gifs = await gifCall.json();

    this.setState({
      songs: songs,
      videos: videos,
      pics: pics,
      gifs: gifs
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmitBlock(e) {
    e.preventDefault();

    if (this.state.title === "") {
      alert("Enter a title for this week's post!");
    } else {
      const newBlock = {
        title: this.state.title,
        first: {
          name: this.state.firstName,
          description: this.state.firstDescription,
          url: this.state.firstUrl,
          type: this.state.firstType
        },
        second: {
          name: this.state.secondName,
          description: this.state.secondDescription,
          url: this.state.secondUrl,
          type: this.state.secondType
        },
        third: {
          name: this.state.thirdName,
          description: this.state.thirdDescription,
          url: this.state.thirdUrl,
          type: this.state.thirdType
        },
        fourth: {
          name: this.state.fourthName,
          description: this.state.fourthDescription,
          url: this.state.fourthUrl,
          type: this.state.fourthType
        }
      };
      console.log(newBlock);

      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newBlock)
      };

      const response = await fetch(
        "https://www.onabeat.com/api/blocks/create-block",
        options
      );
      const block = await response.json();
      if (block.title === this.state.title) {
        alert("block posted");
        this.setState({
          firstName: "",
          firstArtist: "",
          firstUrl: "",
          firstType: "",
          secondName: "",
          secondDescription: "",
          secondUrl: "",
          secondType: "",
          thirdName: "",
          thirdDescription: "",
          thirdUrl: "",
          thirdType: "",
          fourthName: "",
          fourthDescription: "",
          fourthUrl: "",
          fourthType: "",
          title: "",
          counter: 0
        });
      } else {
        alert("Error posting block");
      }
    }
  }
  async onSubmit(e) {
    e.preventDefault();
    let type = e.nativeEvent.target.id;
    let count = this.state.counter + 1;

    switch (this.state.counter) {
      case 0:
        this.setState({
          firstName: e.nativeEvent.target.attributes["name"].value,
          firstDescription:
            e.nativeEvent.target.attributes["description"].value,
          firstUrl: e.nativeEvent.target.attributes["url"].value,
          firstType: type
        });
        break;
      case 1:
        console.log(e.nativeEvent.target.attributes);
        this.setState({
          secondName: e.nativeEvent.target.attributes["name"].value,
          secondDescription:
            e.nativeEvent.target.attributes["description"].value,
          secondUrl: e.nativeEvent.target.attributes["url"].value,
          secondType: type
        });
        break;
      case 2:
        this.setState({
          thirdName: e.nativeEvent.target.attributes["name"].value,
          thirdDescription:
            e.nativeEvent.target.attributes["description"].value,
          thirdUrl: e.nativeEvent.target.attributes["url"].value,
          thirdType: type
        });
        break;
      case 3:
        this.setState({
          fourthName: e.nativeEvent.target.attributes["name"].value,
          fourthDescription:
            e.nativeEvent.target.attributes["description"].value,
          fourthUrl: e.nativeEvent.target.attributes["url"].value,
          fourthType: type
        });
        break;
      default:
        break;
    }
    this.setState({ counter: count });
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
          Add a content block
        </span>

        <TextInput
          placeholder="Block Title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
        {/* 
        <TextInput
          placeholder="Unique URL that will link to post"
          name="shareUrl"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        /> */}

        <DropdownButton
          id="dropdown-item-button"
          title="Song List"
          style={{ marginBottom: 10 }}
        >
          {this.state.songs.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              url={x.songUrl}
              description={x.artist}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
              id="Song"
            >
              {x.name} - {x.artist}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          id="dropdown-item-button"
          title="Video List"
          style={{ marginBottom: 10 }}
        >
          {this.state.videos.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              description={x.description}
              url={x.videoUrl}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
              id="Vid"
            >
              {x.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          id="dropdown-item-button"
          title="Gif List"
          style={{ marginBottom: 10 }}
        >
          {this.state.gifs.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              description={x.description}
              url={x.gifUrl}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
              id="Gif"
            >
              {x.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          id="dropdown-item-button"
          title="Pic List"
          style={{ marginBottom: 10 }}
        >
          {this.state.pics.map(x => (
            <Dropdown.Item
              key={x._id}
              name={x.name}
              description={x.description}
              url={x.picUrl}
              value={x._id}
              onClick={this.onSubmit}
              as="button"
              id="Pic"
            >
              {x.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <div
          style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
        >
          <span style={{ fontWeight: "bold" }}>
            First Name:{" "}
            <span style={{ color: "red" }}>{this.state.firstName} </span> Type:{" "}
            <span style={{ color: "red" }}>{this.state.firstType}</span>
          </span>
          <span style={{ fontWeight: "bold" }}>
            Second Name:{" "}
            <span style={{ color: "red" }}>{this.state.secondName} </span> Type:{" "}
            <span style={{ color: "red" }}>{this.state.secondType}</span>
          </span>
          <span style={{ fontWeight: "bold" }}>
            Third Name:{" "}
            <span style={{ color: "red" }}>{this.state.thirdName} </span> Type:{" "}
            <span style={{ color: "red" }}>{this.state.thirdType}</span>
          </span>
          <span style={{ fontWeight: "bold" }}>
            Fourth Name:{" "}
            <span style={{ color: "red" }}>{this.state.fourthName} </span> Type:{" "}
            <span style={{ color: "red" }}>{this.state.fourthType}</span>
          </span>
        </div>
        <form
          onSubmit={this.onSubmit}
          style={{
            maxWidth: 320
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Button
              type="submit"
              variant="primary"
              onClick={this.onSubmitBlock}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBlockForm;
