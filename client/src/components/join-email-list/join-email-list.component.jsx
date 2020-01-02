import React from 'react'
import { ButtonToolbar, OverlayTrigger, Popover, Button } from "react-bootstrap"

class JoinEmailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <ButtonToolbar>
                {['bottom'].map(placement => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Title as="h3">Email Address</Popover.Title>
                                <Popover.Content>
                                    <input type="email" />
                                    <div style={{ padding: 5 }}></div>
                                    <Button variant="secondary">Join</Button>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <Button variant="secondary">Join Email List</Button>
                    </OverlayTrigger>
                ))}
            </ButtonToolbar>
        )
    }


}

export default JoinEmailList;