import React from "react";
import AutoResponsive from "autoresponsive-react";

class ContentGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { arrayList: [0] };
  }

  renderItems() {
    return this.state.arrayList.map(function(i) {
      return (
        <div className="item" key={i} style={{}}>
          {i}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <AutoResponsive ref="container">{this.renderItems()}</AutoResponsive>
      </div>
    );
  }
}

export default ContentGrid;
