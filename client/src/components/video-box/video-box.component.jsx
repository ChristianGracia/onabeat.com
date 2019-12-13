import React from "react";

class VideoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  async componentDidMount() {
    const response = await fetch("/all");
    const videos = await response.json();

    this.setState({ videos: videos });
  }
  render() {
    return (
      <div>
        {this.state.videos.map(video => {
          return <p>{video.name}</p>;
        })}
      </div>
    );
  }
}

export default VideoBox;
