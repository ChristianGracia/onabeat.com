import React from "react";
// import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Button } from "react-bootstrap";

class DeleteGifForm extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            currentGifName: "",
            currentGifId: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async componentDidMount() {
        const response = await fetch("http://www.onabeat.com/api/gifs/all");
        const gifs = await response.json();

        this.setState({ gifs: gifs });
        console.log(gifs);
    }
    async onSubmit(e) {
        e.preventDefault();
        let id = e.nativeEvent.target.value;
        console.log(e.nativeEvent.target.value);
        this.setState({
            currentGifName: e.nativeEvent.target.name,
            currentGifId: id
        });
    }
    async handleDelete(e) {
        const options = {
            method: "DELETE"
        };
        let id = this.state.currentGifId;
        const response = await fetch(
            `http://www.onabeat.com/api/gifs/${id}`,
            options
        );
        const gif = await response.json();
        console.log(gif);
        if (gif.success === "true") {
            alert("delete gif success");
            this.setState({
                currentGifName: "",
                currentGifId: ""
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
                    Remove a Gif
        </span>

                <DropdownButton id="dropdown-item-button" title="GIF List">
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
                <div style={{ marginTop: 20, color: "red" }}>
                    <p>Remove {this.state.currentGifName}?</p>
                    {this.state.currentGifName !== "" ? (

                        <Button onClick={this.handleDelete} variant="danger">
                            Delete Gif
            </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default DeleteGifForm;
