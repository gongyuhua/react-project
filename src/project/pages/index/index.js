import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import EchartList from "./echartsList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      echartsData: [820, 932, 901, 934, 1290, 1330, 1320]
    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h1>Bar Charts</h1>
            <EchartList data={this.state.echartsData} type="bar" />
          </Col>

          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h1>Line Charts</h1>
            <EchartList data={this.state.echartsData} type="line" />
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h1>Scatter</h1>
            <EchartList data={this.state.echartsData} type="scatter" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
