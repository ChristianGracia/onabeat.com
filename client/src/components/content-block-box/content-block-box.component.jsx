import React from "react";

import "./content-block-box.styles.scss";
import ContentBlockPlayer from "../content-block-player/content-block-player.component"
import Fade from 'react-reveal/Fade';
import { Button } from "react-bootstrap"


class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blocks: [] }
        this.postClick = this.postClick.bind(this);
    }
    async componentDidMount() {
        const response = await fetch("https://www.onabeat.com/api/blocks/all");
        const blocks = await response.json();
        blocks.reverse();
        this.setState({ blocks: blocks });
    }
    postClick(e) {

        let id = e.nativeEvent.target.attributes.id.value;
        window.location.href = `/post/${id}`;
    }



    render() {
        return (
            <div style={{}}>
                {this.state.blocks.map(block => {
                    return (<Fade left>
                        <ContentBlockPlayer key={block._id} data={block} />
                        <div style={{ marginTop: 30 }}>
                            <Button onClick={this.postClick} id={block._id} key={block._id} variant="dark"><span style={{ color: "#F8D101", fontWeight: "bold" }}>Share</span> {block.title}</Button>
                        </div>
                    </Fade>
                    );
                })}
            </div >
        )
    }
}

export default ContentBlockBox;