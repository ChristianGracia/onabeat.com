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
            return <iframe height="250" width="250" src={url} frameBorder="0" class="" allowFullScreen></iframe>
        case "Pic":
            return <img height="250" width="250" src={url} />
        default:
            return null
    }
}
export default MediaType;