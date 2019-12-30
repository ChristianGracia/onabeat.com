import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreateGifForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            gifUrl: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSubmit(e) {
        e.preventDefault();

        let url = this.state.gifUrl.slice(13)
            .split(" ")[0]
            .slice(0, -1);


        const newGif = {
            name: this.state.name,
            gifUrl: url,
            description: this.state.description
        };

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newGif)
        };

        const response = await fetch(
            "http://www.onabeat.com/api/gifs/create-gif",
            options
        );
        const gif = await response.json();
        if (gif.name === this.state.name) {
            alert("Gif posted");
            this.setState({
                name: "",
                description: "",
                gifUrl: ""
            });
        } else {
            alert("Error posting gif");
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
                    Add a Gif
        </span>

                <form onSubmit={this.onSubmit}>
                    <TextInput
                        placeholder="Name of gif"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        style={{ maxWidth: 320 }}
                    />
                    {/* <p>
                        Enter only the random letters/numbers after www.youtube.com/watch?v=
          </p> */}
                    <TextInput
                        placeholder="GIF url"
                        name="gifUrl"
                        type="text"
                        value={this.state.gifUrl}
                        onChange={this.onChange}
                    />
                    {/* <div style={{ marginBottom: 15 }}>
                        <span style={{ fontWeight: "bold" }}>
                            Current Url: www.youtube.com/watch?v={this.state.videoUrl}
                        </span>
                    </div> */}

                    <TextInput
                        placeholder="Description of gif (optional)"
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.onChange}
                    />

                    <div
                        style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
                    >

                        <p
                            style={{
                                color: "red",
                                fontWeight: "bold"
                            }}
                        >
                            To get Gif Url, upload gif to Giphy.com, click embed next to gif, copy and paste embed code to gif url
            </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="submit" variant="primary">
                            Submit
            </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateGifForm;
