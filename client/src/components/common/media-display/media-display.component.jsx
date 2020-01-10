import React from 'react';
import MediaType from "../media-type/media-type.component";
import LazyLoad from "react-lazyload";
import Spinner from "../../common/spinner/spinner.component";


const MediaDisplay = ({ data, id }) => {
    return (<div>
        <div className="item">
            <p className="title">{data.name}</p>

            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <div>
                    <p className="description">{data.description} </p><MediaType url={data.url} type={data.type} />
                </div>
            </LazyLoad>
        </div>
    </div>)
}
export default MediaDisplay;