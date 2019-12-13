import React from "react";

class VideoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const url = "http://www.localhost:15677/all";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default VideoBox;
