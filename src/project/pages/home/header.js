import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Icon } from "antd";
const { Header } = Layout;

class Top extends Component {
  render() {
    return (
      <Header style={{ background: "#fff" }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.props.toggle}
        />
      </Header>
    );
  }
}

export default Top;
