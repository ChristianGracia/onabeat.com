import React from 'react';
import MediaType from "../media-type/media-type.component";

const MediaDisplay = ({ data }) => {
    return (<div>
        <div className="item">
            <p className="title">{data.first.name}
            </p>

            <p className="artist">{data.first.description} </p><MediaType url={data.first.url} type={data.first.type} />
        </div>




    </div>)
}
export default MediaDisplay;