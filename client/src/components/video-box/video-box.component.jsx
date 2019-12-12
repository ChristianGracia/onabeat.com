import React from "react";

class VideoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const url = "http://www.onabeat.com/api/all";
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
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
