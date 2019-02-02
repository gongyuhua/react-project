import React, { Component } from "react";
import "antd/dist/antd.css";
import { DatePicker, Input, Row, Col } from "antd";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ""
    };
  }
  dateChange = date => {
    const now = new Date().toDateString();
    const msGap =
      new Date(now).getTime() - new Date(date._d.toDateString()).getTime();
    const trueAge = (msGap / 1000 / 60 / 60 / 24 / 365.242199).toFixed(2);
    this.setState({ output: trueAge });
  };
  render() {
    return (
      <div style={{ marginTop: 80 }}>
        <Row type="flex" justify="center">
          <Col span={7}>
            <label style={{ fontSize: 14 }}>Your birth date：</label>
            <DatePicker onChange={this.dateChange} />
          </Col>
          <Col span={8}>
            <Input
              addonBefore="You have been on the earth for："
              addonAfter="Year"
              value={this.state.output}
              id="blue"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Age;
