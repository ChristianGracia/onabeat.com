import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreateBlockForm extends React.Component {
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

        let url = this.state.songUrl
            .split(" ")[6]
            .substring(5)
            .split('"')[0];

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
                        Add a content block
          </span>



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
