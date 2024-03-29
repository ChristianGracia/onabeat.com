import React from "react";
import "./content-block-player.styles.scss";
import MediaDisplay from "../common/media-display/media-display.component";

const ContentPlayer = ({ data }) => {
  return (
    <div>
      <div className="week" style={{ marginBottom: -30 }}>
        <span className="week">{data.title}</span>
      </div>
      <div style={{ marginTop: 10, marginBottom: 60 }}></div>
      <div className="container">
        {data.first.url === "" ? null : <MediaDisplay data={data.first} />}
        {data.second.url === "" ? null : <MediaDisplay data={data.second} />}
        {data.third.url === "" ? null : <MediaDisplay data={data.third} />}
        {data.fourth.url === "" ? null : <MediaDisplay data={data.fourth} />}
      </div>
    </div>
  );
};

export default ContentPlayer;
