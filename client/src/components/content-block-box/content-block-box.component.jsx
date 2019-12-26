import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";
import { Container, Row, Col } from 'react-bootstrap';
import "./content-block-box.styles.scss";



class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Content</div>
                <div style={{ display: "flex", flex: 0, flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                    <div >
                        <VideoPlayer videoUrl="ZZ5LpwO-An4" />
                    </div>
                    {/* <iframe src="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                    <div > <SpotifyPlayer songUrl="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" /></div>
                    <div style={{ maxWidth: "25%" }}><img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg" /></div><div >
                        <iframe src="https://giphy.com/embed/11JTxkrmq4bGE0" frameBorder="0" class="" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-computer-working-11JTxkrmq4bGE0"></a></p></div>

                </div>

            </div >
        )
    }
}

export default ContentBlockBox;