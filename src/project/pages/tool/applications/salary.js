import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Select, message } from "antd";
const Option = Select.Option;

class Salary extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      medical: "",
      tax: "",
      social: "",
      net: ""
    };
  }

  handleChange(event) {
    var salary = event.target.value;
    var input = salary,
      medical = salary * 0.1,
      tax = salary * 0.2,
      social = salary * 0.1,
      net = salary - medical - tax - social;
    this.setState({
      input: input,
      medical: medical,
      tax: tax,
      social: social,
      net: net
    });
  }
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <div>
          <Input
            addonBefore="Gross Salary"
            addonAfter="$"
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div>
          <Input
            addonBefore="Medical Insurance"
            addonAfter="$"
            value={this.state.medical}
            readOnly
          />
        </div>
        <div>
          <Input addonBefore="Tax" addonAfter="$" value={this.state.tax} />
        </div>
        <div>
          <Input
            addonBefore="Social Security"
            addonAfter="$"
            value={this.state.social}
          />
        </div>
        <div>
          <Input
            addonBefore="Net Income"
            addonAfter="$"
            value={this.state.net}
          />
        </div>
      </div>
    );
  }
}

export default Salary;
