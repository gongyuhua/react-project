import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Music from "../music/music";
import Home from "../index/index";
import Application from "../tool/applications/applications";
import Todo from "../tool/todo";
import Pics from "../art/pic";
import { Route } from "react-router-dom";
import Age from "../tool/applications/age";
import MyEditor from "../tool/applications/editor";
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
        <Route exact path="/index" component={Home} />
        <Route path="/index/music" component={Music} />
        <Route path="/index/applications" component={Application} />
        <Route path="/index/editors" component={MyEditor} />
        <Route path="/index/todo" component={Todo} />
        <Route path="/index/age" component={Age} />
        <Route path="/index/pic" component={Pics} />
      </Content>
    );
  }
}

export default Main;
