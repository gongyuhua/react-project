import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Footer } = Layout;

class Bottom extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
  }
}

export default Bottom;
