import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";
import { Container, Row, Col } from 'react-bootstrap';

class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Content</div>
                <Container >
                    <Row>

                        <VideoPlayer videoUrl="ZZ5LpwO-An4" />

                        {/* <iframe src="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                        <SpotifyPlayer songUrl="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" />
                        <iframe src="https://giphy.com/embed/11JTxkrmq4bGE0" width="200" height="200" frameBorder="0" class="" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-computer-working-11JTxkrmq4bGE0"></a></p>
                    </Row>
                </Container >


            </div >
        )
    }
}

export default ContentBlockBox;