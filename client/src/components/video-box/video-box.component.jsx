import React from "react";
import VideoPlayer from "../video-player/video-player.component";

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
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {this.state.videos.map(video => {
          return (
            <div key={video.name}>
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
                    fontSize: 20,
                    padding: 20
                  }}
                >
                  {video.name}
                </span>
                <span
                  style={{
                    color: "black",

                    fontSize: 20,
                    padding: 20
                  }}
                >
                  {video.description}
                </span>
              </div>
              <VideoPlayer key={video.name} videoUrl={video.videoUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoBox;
