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
            gifs: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSubmit(e) {
        e.preventDefault();

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
                <DropdownButton id="dropdown-item-button" title="Gif List">
                    {this.state.gifs.map(x => (
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
                <DropdownButton id="dropdown-item-button" title="Pic List">
                    {this.state.pics.map(x => (
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
                <form
                    onSubmit={this.onSubmit}
                    style={{
                        maxWidth: 320
                    }}
                >

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

export default CreateBlockForm;
