import React from "react";
// import TextInput from "../common/text-input/text-input.component";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Button } from "react-bootstrap";

class DeletePicForm extends React.Component {
    constructor() {
        super();

        this.state = {
            pics: [],
            currentPicName: "",
            currentPicId: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async componentDidMount() {
        const response = await fetch("http://www.onabeat.com/api/pics/all");
        const pics = await response.json();

        this.setState({ pics: pics });
        console.log(pics);
    }
    async onSubmit(e) {
        e.preventDefault();
        let id = e.nativeEvent.target.value;
        console.log(e.nativeEvent.target.value);
        this.setState({
            currentPicName: e.nativeEvent.target.name,
            currentPicId: id
        });
    }
    async handleDelete(e) {
        const options = {
            method: "DELETE"
        };
        let id = this.state.currentPicId;
        const response = await fetch(
            `http://www.onabeat.com/api/pics/${id}`,
            options
        );
        const pic = await response.json();
        console.log(pic);
        if (pic.success === "true") {
            alert("delete pic success");
            this.setState({
                currentPicName: "",
                currentPicId: ""
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
                    Remove a Pic
        </span>

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
                <div>
                    <p>{this.state.currentPicName}</p>
                    {this.state.currentPicName !== "" ? (
                        <Button onClick={this.handleDelete} variant="danger">
                            Delete Pic
            </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default DeletePicForm;
