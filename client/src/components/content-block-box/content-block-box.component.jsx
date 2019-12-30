import React from "react";

import "./content-block-box.styles.scss";
import ContentBlockPlayer from "../content-block-player/content-block-player.component"



class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blocks: [] }
    }
    async componentDidMount() {
        const response = await fetch("http://www.onabeat.com/api/blocks/all");
        const blocks = await response.json();
        console.log(blocks.reverse())
        this.setState({ blocks: blocks });
    }

    render() {
        return (
            <div style={{}}>


                {this.state.blocks.map(block => {
                    return (
                        <ContentBlockPlayer data={block} />
                    );
                })}

            </div >
        )
    }
}

export default ContentBlockBox;