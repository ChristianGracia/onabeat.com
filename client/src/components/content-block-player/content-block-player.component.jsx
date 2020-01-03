import React from "react";
import SpotifyPlayer from "../spotify-player/spotify-player.component";
import VideoPlayer from "../video-player/video-player.component";
import "./content-block-player.styles.scss"

const ContentPlayer = ({ data }) => {
    return (<div> <div class="week" ><span class="week">{data.title}</span></div>
        <div className="container" >


            {data.first.url == "" ? null : <div className="item">
                <p className="title">{data.first.name}
                </p>
                <p className="artist">{data.first.description} </p><SpotifyPlayer songUrl={data.first.url} />
            </div>}
            {data.second.url == "" ? null :
                <div className="item">
                    <p className="title">{data.second.name} </p>
                    <p className="description">{data.second.description} </p>
                    <VideoPlayer videoUrl={data.second.url} />
                </div>
            }
            {data.third.url == "" ? null : <div className="item" >
                <p className="title">{data.third.name}</p>
                <p className="description">{data.third.description}</p>

                <iframe height="250" width="250" src={data.third.url} frameBorder="0" class="" allowFullScreen></iframe>

            </div>}
            {data.fourth.url == "" ? null : <div className="item">
                <p className="title">{data.fourth.name}</p>
                <p className="description">{data.fourth.description}</p>
                <img height="250" width="250" src={data.fourth.url} />

            </div>
            }

        </div>
    </div>)
}

export default ContentPlayer