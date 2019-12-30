import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";
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
        console.log(blocks)

        this.setState({ blocks: blocks });

    }

    render() {
        return (
            <div>

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