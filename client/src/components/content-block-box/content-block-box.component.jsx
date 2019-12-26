import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";
import "./content-block-box.styles.scss";



class ContentBlockBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="week" >Week 1</div>
                <div className="container">

                    <div className="item">
                        <p className="title">Video</p>
                        <VideoPlayer videoUrl="ZZ5LpwO-An4" />
                    </div>
                    {/* <iframe src="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                    <div className="item">
                        <p className="title">Song</p> <SpotifyPlayer songUrl="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" />
                    </div>
                    <div className="item" >
                        <p className="title">Pic</p>
                        <img height="250" width="250" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/25/11/istock-1069317442.jpg?w968" />
                    </div>
                    <div className="item">
                        <p className="title">Loop</p>
                        <iframe height="250" width="250" src="https://giphy.com/embed/11JTxkrmq4bGE0" frameBorder="0" class="" allowFullScreen></iframe>
                    </div>

                </div>

            </div >
        )
    }
}

export default ContentBlockBox;