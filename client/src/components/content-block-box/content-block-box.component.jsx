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
                <div>Content</div>
                <div className="container">

                    <div className="item">
                        <VideoPlayer videoUrl="ZZ5LpwO-An4" /></div>
                    {/* <iframe src="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                    <div className="item"> <SpotifyPlayer songUrl="https://open.spotify.com/embed/track/59QmjU5K8XQTfj9JjFNb4Z" /></div>
                    <div className="item" ><img height="300" width="300" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/25/11/istock-1069317442.jpg?w968" /></div>
                    <div className="item">
                        <iframe src="https://giphy.com/embed/11JTxkrmq4bGE0" height="300" width="300" frameBorder="0" class="" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-computer-working-11JTxkrmq4bGE0"></a></p></div>

                </div>

            </div >
        )
    }
}

export default ContentBlockBox;