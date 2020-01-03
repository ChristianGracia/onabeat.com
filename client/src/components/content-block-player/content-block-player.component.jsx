import React from "react";
import "./content-block-player.styles.scss"
import MediaDisplay from "../common/media-display/media-display.component"

const ContentPlayer = ({ data }) => {
    return (<div> <div class="week" ><span class="week">{data.title}</span></div>
        <div className="container" >
            {
                data.first.url == "" ? null : <MediaDisplay data={data.first} />
            }
            {
                data.second.url == "" ? null : <MediaDisplay data={data.second} />
            }
            {
                data.third.url == "" ? null : <MediaDisplay data={data.third} />
            }
            {
                data.fourth.url == "" ? null : <MediaDisplay data={data.fourth} />
            }
        </div>
    </div>)
}

export default ContentPlayer