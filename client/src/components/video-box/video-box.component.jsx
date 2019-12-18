import React from "react";
import VideoPlayer from "../video-player/video-player.component";
// import AutoResponsive from "autoresponsive-react";

class VideoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  async componentDidMount() {
    const response = await fetch("api/videos/all");
    const videos = await response.json();

    this.setState({ videos: videos });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {/* <AutoResponsive
          ref="container"
          align="center"
          style={
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }
          }
        > */}
        {this.state.videos.map(video => {
          return (
            <div
              key={video.name}
              style={{
                width: "33%",
                minWidth: 320,
                height: 400,
                marginTop: 15
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: 18,
                    marginTop: 5,
                    maxWidth: 300
                  }}
                >
                  {video.name}
                </span>
                <span
                  style={{
                    color: "black",
                    marginTop: 5,
                    fontSize: 14,
                    maxWidth: 300
                  }}
                >
                  {video.description}
                </span>
              </div>
              <div style={{ marginTop: 10 }}>
                <VideoPlayer key={video.name} videoUrl={video.videoUrl} />
              </div>
            </div>
          );
        })}
        {/* </AutoResponsive> */}
      </div>
    );
  }
}

export default VideoBox;
