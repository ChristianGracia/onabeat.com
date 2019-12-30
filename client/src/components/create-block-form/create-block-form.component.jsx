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
            songName: "",
            songArtist: "",
            songUrl: "",
            vidName: "",
            vidDescription: "",
            vidUrl: "",
            picName: "",
            picDescription: "",
            picUrl: "",
            gifName: "",
            gifDescription: "",
            gifUrl: "",


            title: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitBlock = this.onSubmitBlock.bind(this);
    }

    async componentDidMount() {
        const songCall = await fetch("http://www.onabeat.com/api/songs/all");
        const songs = await songCall.json();
        const videoCall = await fetch("http://www.onabeat.com/api/videos/all");
        const videos = await videoCall.json();
        const picCall = await fetch("http://www.onabeat.com/api/pics/all");
        const pics = await picCall.json();
        const gifCall = await fetch("http://www.onabeat.com/api/gifs/all");
        const gifs = await gifCall.json();

        this.setState({
            songs: songs,
            videos: videos, pics: pics, gifs: gifs
        });
        console.log(songs);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSubmitBlock(e) {
        e.preventDefault();

        const newBlock = {
            title: this.state.title,
            vid: { videoName: this.state.vidName, videoDescription: this.state.vidDescription, vidUrl: this.state.vidUrl },
            song: { songName: this.state.songName, songArtist: this.state.songArtist, songUrl: this.state.songUrl },
            pic: { picName: this.state.picName, picDescription: this.state.picDescription, picUrl: this.state.picUrl },
            gif: { gifName: this.state.gifName, gifDescription: this.state.gifDescription, gifUrl: this.state.gifUrl }

        }
        console.log(newBlock)

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newBlock)
        };

        const response = await fetch(
            "http://www.onabeat.com/api/blocks/create-block",
            options
        );
        const block = await response.json();
        if (block.title === this.state.title) {
            alert("block posted");
            this.setState({
                songName: "",
                songArtist: "",
                songUrl: "",
                vidName: "",
                vidDescription: "",
                vidUrl: "",
                picName: "",
                picDescription: "",
                picUrl: "",
                gifName: "",
                gifDescription: "",
                gifUrl: "",


                title: ""
            });
        } else {
            alert("Error posting block");
        }
    }
    async onSubmit(e) {
        e.preventDefault();
        let type = e.nativeEvent.target.id;
        console.log(type);
        switch (type) {
            case "Song":
                this.setState({
                    songName: e.nativeEvent.target.attributes["name"].value,
                    songArtist: e.nativeEvent.target.attributes["artist"].value,
                    songUrl: e.nativeEvent.target.attributes["songurl"].value
                })
                break;
            case "Vid":
                console.log(e.nativeEvent.target.attributes);
                this.setState({
                    vidName: e.nativeEvent.target.attributes["name"].value,
                    vidDescription: e.nativeEvent.target.attributes["description"].value,
                    vidUrl: e.nativeEvent.target.attributes["videourl"].value
                })
                break;
            case "Pic":
                this.setState({
                    picName: e.nativeEvent.target.attributes["name"].value,
                    picDescription: e.nativeEvent.target.attributes["description"].value,
                    picUrl: e.nativeEvent.target.attributes["picurl"].value
                })
                break;
            case "Gif":
                this.setState({
                    gifName: e.nativeEvent.target.attributes["name"].value,
                    gifDescription: e.nativeEvent.target.attributes["description"].value,
                    gifUrl: e.nativeEvent.target.attributes["gifurl"].value
                })
                break;
            default:
                break;

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

                <DropdownButton id="dropdown-item-button" title="Song List" style={{ marginBottom: 10 }}>
                    {this.state.songs.map(x => (
                        <Dropdown.Item
                            key={x._id}
                            name={x.name}
                            songurl={x.songUrl}
                            artist={x.artist}
                            value={x._id}
                            onClick={this.onSubmit}
                            as="button"
                            id="Song"
                        >
                            {x.name} - {x.artist}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Video List" style={{ marginBottom: 10 }}>
                    {this.state.videos.map(x => (
                        <Dropdown.Item
                            key={x._id}
                            name={x.name}
                            description={x.description}
                            videourl={x.videoUrl}
                            value={x._id}
                            onClick={this.onSubmit}
                            as="button"
                            id="Vid"
                        >{x.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Gif List" style={{ marginBottom: 10 }}>
                    {this.state.gifs.map(x => (
                        <Dropdown.Item
                            key={x._id}
                            name={x.name}
                            description={x.description}
                            gifurl={x.gifUrl}
                            value={x._id}
                            onClick={this.onSubmit}
                            as="button"
                            id="Gif"
                        >{x.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Pic List" style={{ marginBottom: 10 }}>
                    {this.state.pics.map(x => (
                        <Dropdown.Item
                            key={x._id}
                            name={x.name}
                            description={x.description}
                            picurl={x.picUrl}
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
                    <span style={{ fontWeight: "bold" }}>Video name:   <span style={{ color: "red" }}>{this.state.vidName}</span></span>
                    <span style={{ fontWeight: "bold" }}>Song Name:  <span style={{ color: "red" }}>{this.state.songName}</span></span>
                    <span style={{ fontWeight: "bold" }}>
                        Gif Name: <span style={{ color: "red" }}>{this.state.gifName}</span>
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                        Pic Name: <span style={{ color: "red" }}>{this.state.picName}</span>
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
                        <Button type="submit" variant="primary" onClick={this.onSubmitBlock}>
                            Submit
            </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateBlockForm;
