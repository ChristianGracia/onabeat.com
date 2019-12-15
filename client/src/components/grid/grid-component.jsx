import React from "react";
import AutoResponsive from "autoresponsive-react";

class ContentGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { arrayList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] };
  }
  getAutoResponsiveProps() {
    return {
      horizontalDirection: this.state.horizontalDirection,
      verticalDirection: this.state.verticalDirection,
      itemMargin: this.state.itemMargin,
      containerWidth: this.state.containerWidth || this.props.containerWidth,
      itemClassName: "item",
      containerHeight: this.state.containerHeight,
      transitionDuration: ".8",
      transitionTimingFunction: "easeIn"
    };
  }
  renderItems() {
    return this.state.arrayList.map(function(i) {
      return (
        <div
          className="item"
          key={i}
          style={{
            height: 100,
            width: 100,
            cursor: "default",
            color: "#514713",
            borderRadius: 5,
            boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset",
            backgroundColor: "#a28f27",
            borderColor: "#796b1d",
            fontSize: "80px",
            lineHeight: "100px",
            textAlign: "center",
            fontWeight: "bold",
            textShadow: "1px 1px 0px #ab9a3c",
            userSelect: "none"
          }}
        >
          {i}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {this.renderItems()}
        </AutoResponsive>
      </div>
    );
  }
}

export default ContentGrid;
