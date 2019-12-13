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
      <div>
        {this.state.videos.map(video => {
          return (
            <div>
              {" "}
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
                    paddingBottom: 20
                  }}
                >
                  {video.name}
                </span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: 20,
                    paddingBottom: 20
                  }}
                >
                  {video.description}
                </span>
              </div>
              <VideoPlayer imgUrl={video.videoUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoBox;
