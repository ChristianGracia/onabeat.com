import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";

const ContentPlayer = ({ data }) => {
    return (<div> <div class="week" >{data.title}</div>
        <div className="container">
            <div className="item">
                <p className="title">{data.vid.videoName} </p>
                <VideoPlayer videoUrl={data.vid.vidUrl} />
            </div>

            <div className="item">
                <p className="title">{data.song.songName} </p> <SpotifyPlayer songUrl={data.song.songUrl} />
            </div>
            <div className="item" >
                <p className="title">{data.pic.picName}</p>
                <img height="250" width="250" src={data.pic.picUrl} />
            </div>
            <div className="item">
                <p className="title">{data.gif.gifName}</p>
                <iframe height="250" width="250" src={data.gif.gifUrl} frameBorder="0" class="" allowFullScreen></iframe>
            </div>

        </div>
    </div>)
}

export default ContentPlayer