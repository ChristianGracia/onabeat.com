import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Button } from "react-bootstrap";

class DeleteBlockForm extends React.Component {
    constructor() {
        super();

        this.state = {
            blocks: [],
            currentBlockName: "",
            currentBlockId: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async componentDidMount() {
        const response = await fetch("https://www.onabeat.com/api/blocks/all");
        const blocks = await response.json();

        this.setState({ blocks: blocks });

    }
    async onSubmit(e) {
        e.preventDefault();
        let id = e.nativeEvent.target.value;
        console.log(e.nativeEvent);
        this.setState({
            currentBlockName: e.nativeEvent.target.innerText,
            currentBlockId: id
        });
    }
    async handleDelete(e) {
        const options = {
            method: "DELETE"
        };
        let id = this.state.currentBlockId;
        const response = await fetch(
            `https://www.onabeat.com/api/blocks/${id}`,
            options
        );
        const block = await response.json();
        console.log(block);
        if (block.success === "true") {
            alert("delete block success");
            this.setState({
                currentBlockName: "",
                currentBlockId: ""
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
                    Remove a Block
        </span>

                <DropdownButton id="dropdown-item-button" title="Block List">
                    {this.state.blocks.map(x => (
                        <Dropdown.Item
                            key={x._id}
                            name={x.name}
                            value={x._id}
                            onClick={this.onSubmit}
                            as="button"
                        >
                            {x.title}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <div style={{ marginTop: 20, color: "red" }}>
                    <p>Remove {this.state.currentBlockName}?</p>
                    {this.state.currentBlockName !== "" ? (
                        <Button onClick={this.handleDelete} variant="danger">
                            Delete Block
            </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default DeleteBlockForm;
