import React from "react";

import "./content-block-box.styles.scss";
import ContentBlockPlayer from "../content-block-player/content-block-player.component"
import Fade from 'react-reveal/Fade';


class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blocks: [] }
    }
    async componentDidMount() {
        const response = await fetch("http://www.onabeat.com/api/blocks/all");
        const blocks = await response.json();
        blocks.reverse();
        this.setState({ blocks: blocks });
    }

    render() {
        return (
            <div style={{}}>
                {this.state.blocks.map(block => {
                    return (<Fade left>
                        <ContentBlockPlayer data={block} />
                    </Fade>
                    );
                })}
            </div >
        )
    }
}

export default ContentBlockBox;