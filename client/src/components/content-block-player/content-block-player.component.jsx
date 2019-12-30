import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";

const ContentPlayer = ({ data }) => {
    return (<div> <div class="week" >{data.title}</div>
        <div className="container">
            {data.vid.vidUrl == "" ? null :
                <div className="item">
                    <p className="title">{data.vid.videoName} </p>
                    <p className="description">{data.vid.videoDescription} </p>
                    <VideoPlayer videoUrl={data.vid.vidUrl} />
                </div>
            }
            {data.song.songUrl == "" ? null : <div className="item">
                <p className="title">{data.song.songName}
                </p>
                <p className="artist">{data.song.songArtist} </p><SpotifyPlayer songUrl={data.song.songUrl} />
            </div>}
            {data.pic.picUrl == "" ? null : <div className="item" >
                <p className="title">{data.pic.picName}</p>
                <p className="description">{data.pic.picDescription}</p>
                <img height="250" width="250" src={data.pic.picUrl} />
            </div>}
            {data.gif.gifUrl == "" ? null : <div className="item">
                <p className="title">{data.gif.gifName}</p>
                <p className="description">{data.gif.gifDescription}</p>
                <iframe height="250" width="250" src={data.gif.gifUrl} frameBorder="0" class="" allowFullScreen></iframe>
            </div>
            }

        </div>
    </div>)
}

export default ContentPlayer