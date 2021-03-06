import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import Salary from "./salary";
import Rent from "./rent";
import Bmi from "./health";
import Age from "./age";
const TabPane = Tabs.TabPane;

class Application extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Salary Calculator" key="1" style={{ height: 300 }}>
            <Salary />
          </TabPane>
          <TabPane tab="Rent Suggestion " key="2">
            <Rent />
          </TabPane>
          <TabPane tab="Health" key="3">
            <Bmi />
          </TabPane>
          <TabPane tab="Age Calculator" key="4">
            <Age />
          </TabPane>
          <TabPane tab="Comming Soon" key="5" disabled>
            Content of Tab Pane 5
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Application;
