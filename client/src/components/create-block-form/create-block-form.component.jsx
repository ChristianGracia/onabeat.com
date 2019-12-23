import React from "react";
import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";


class CreateBlockForm extends React.Component {
    constructor() {
        super();

        this.state = {
            songs: [],
            videos: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
