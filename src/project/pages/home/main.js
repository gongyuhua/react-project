import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Content } = Layout;

class Main extends Component {
  render() {
    return (
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        Content
      </Content>
    );
  }
}

export default Main;
