import React from "react";
import MediaDisplay from "../common/media-display/media-display.component"

const PostDisplay = ({ data }) => {
    return (<div>

        <div className="week" ><span className="week">{data.title}</span></div>
        <div className="container" >
            {
                data.first.url === "" ? null : <MediaDisplay data={data.first} />
            }
            {
                data.second.url === "" ? null : <MediaDisplay data={data.second} />
            }
            {
                data.third.url === "" ? null : <MediaDisplay data={data.third} />
            }
            {
                data.fourth.url === "" ? null : <MediaDisplay data={data.fourth} />
            }
        </div>
    </div>)
}
export default PostDisplay;