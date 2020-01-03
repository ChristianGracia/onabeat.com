import React from "react";
import "./content-block-player.styles.scss"
import MediaType from "../common/media-type/media-type.component"
import MediaDisplay from "../common/media-display/media-display.component"

const ContentPlayer = ({ data }) => {
    return (<div> <div class="week" ><span class="week">{data.title}</span></div>
        <div className="container" >
            {/* <MediaDisplay data={data} /> */}



            {
                data.first.url == "" ? null : <div className="item">
                    <p className="title">{data.first.name}
                    </p>

                    <p className="artist">{data.first.description} </p><MediaType url={data.first.url} type={data.first.type} />
                </div>
            }
            {
                data.second.url == "" ? null :
                    <div className="item">
                        <p className="title">{data.second.name} </p>
                        <p className="description">{data.second.description} </p>
                        <MediaType url={data.second.url} type={data.second.type} />

                    </div>
            }
            {
                data.third.url == "" ? null : <div className="item" >
                    <p className="title">{data.third.name}</p>
                    <p className="description">{data.third.description}</p>
                    <MediaType url={data.third.url} type={data.third.type} />


                </div>
            }
            {
                data.fourth.url == "" ? null : <div className="item">
                    <p className="title">{data.fourth.name}</p>
                    <p className="description">{data.fourth.description}</p>
                    <MediaType url={data.fourth.url} type={data.fourth.type} />


                </div>
            }

        </div>
    </div>)
}

export default ContentPlayer