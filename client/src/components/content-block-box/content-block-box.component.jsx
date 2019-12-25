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
                        <Col>
                            <VideoPlayer videoUrl="ZZ5LpwO-An4" />
                        </Col>
                        <Col>
                            <Row><SpotifyPlayer songUrl="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" /></Row>
                            <Row><span>Hi</span></Row>

                        </Col>
                    </Row>
                </Container >


            </div>
        )
    }
}

export default ContentBlockBox;