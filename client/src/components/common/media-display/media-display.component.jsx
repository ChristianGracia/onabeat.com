import React from 'react';
import MediaType from "../media-type/media-type.component";

const MediaDisplay = ({ data }) => {
    return (<div>
        <div className="item">
            <p className="title">{data.name}</p>
            <p className="description">{data.description} </p><MediaType url={data.url} type={data.type} />
        </div>
    </div>)
}
export default MediaDisplay;