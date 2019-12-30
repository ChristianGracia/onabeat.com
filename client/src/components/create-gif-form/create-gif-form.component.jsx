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

        const newGif = {
            name: this.state.name,
            gifUrl: this.state.gifUrl,
            description: this.state.description
        };
        console.log(newGif);

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
            alert("Video posted");
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

                    {/* <div
                        style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
                    >
                        <span>Video name: {this.state.name}</span>
                        <span>Description: {this.state.description}</span>
                        <span>
                            Video Url: https://www.youtube.com/watch?v={this.state.videoUrl}
                        </span>

                        <p
                            style={{
                                color: "red",
                                fontWeight: "bold"
                            }}
                        >
                            Video url should look like =
                            https://www.youtube.com/watch?v=ZZ5LpwO-An4
            </p>
                    </div> */}

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
