import React from 'react';
import SpotifyPlayer from "../../spotify-player/spotify-player.component"
import VideoPlayer from "../../video-player/video-player.component"

const MediaType = ({ type, url }) => {
    switch (type) {
        case "Song":
            return <SpotifyPlayer songUrl={url} />;
        case "Vid":
            return <VideoPlayer videoUrl={url} />;
        case "Gif":
            return <iframe title={url} height="250" width="250" src={url} frameBorder="0" className="" allowFullScreen></iframe>
        case "Pic":
            return <img alt="onabeat pic" height="250" width="250" src={url} />
        default:
            return null
    }
}
export default MediaType;