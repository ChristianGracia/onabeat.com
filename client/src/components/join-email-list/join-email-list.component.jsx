import React from 'react'
import { ButtonToolbar, OverlayTrigger, Popover, Button } from "react-bootstrap"
import TextInput from "../common/text-input/text-input.component";
import RubberBand from "react-reveal/RubberBand"

class JoinEmailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEmailInput: false,
            emailAddress: ""
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {

        if (this.state.showEmailInput == true) {
            this.setState({ showEmailInput: false })

        }
        else {
            this.setState({ showEmailInput: true })
        }


    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
    render() {
        return (
            <div>


                {
                    this.state.showEmailInput == false ? (<RubberBand ><div>

                        <Button variant="dark" onClick={this.handleClick}>Join Email List</Button> </div>  </RubberBand>) :
                        (<div>       <form
                            action="https://sendpoint.io/id/onabeat-email"
                            method="POST"
                            style={{}}
                        >    <TextInput
                                placeholder="Email Address"
                                name="emailAddress"
                                type="email"
                                value={this.state.emailAddress}
                                onChange={this.onChange}
                            />
                            <div style={{ padding: 5 }}></div>
                            <Button variant="dark" type="submit">Join</Button></form></div>)
                }

            </div>
        )



    }
}

export default JoinEmailList;