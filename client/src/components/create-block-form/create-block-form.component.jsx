import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";

class CreateBlockForm extends React.Component {
    constructor() {
        super();

        this.state = {

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
