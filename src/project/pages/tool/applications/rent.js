import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Row, Col, Card } from "antd";

class Rent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "", //estimated rent
      duration: "", //rent year
      rent: "", //total rent
      buy: "", //house price
      difference: "", //buy-rent
      des: "" //suggestion
    };
  }
  //estimated rent
  handleChange = event => {
    const money = event.target.value;
    this.setState({ item: money }, () => this.handleRent());
  };
  handleTime = event => {
    const time = event.target.value;
    this.setState({ duration: time }, () => this.handleRent());
  };
  handleRent() {
    const total = this.state.item * this.state.duration;
    this.setState({ rent: total });
  }
  handleHouse = event => {
    const house = event.target.value;
    this.setState({ buy: house }, () => this.handleDiff());
  };
  handleDiff = event => {
    const diff = this.state.rent - this.state.buy;
    this.setState({ difference: diff });
    if (this.state.difference > 0) {
      this.setState({ des: "buying house" });
    } else if (this.state.difference === 0) {
      this.setState({ des: "Same" });
    } else {
      this.setState({ des: "renting house" });
    }
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              type="number"
              addonBefore="Estimated Rent"
              name="item"
              addonAfter="$/Year"
              value={this.state.item}
              onChange={event => this.handleChange(event)}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              type="number"
              addonBefore="Estimated duration"
              name="item"
              addonAfter="Year"
              value={this.state.duration}
              onChange={event => this.handleTime(event)}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              type="number"
              addonBefore="Total Rent"
              name="item"
              addonAfter="$"
              value={this.state.rent}
              onChange={event => this.handleBuy(event)}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              type="number"
              addonBefore="House Price"
              name="item"
              addonAfter="$"
              value={this.state.buy}
              onChange={event => this.handleHouse(event)}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              type="number"
              addonBefore="Difference"
              name="item"
              addonAfter="$"
              value={this.state.difference}
              onChange={event => this.handleDiff(event)}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Card bodyStyle={{ padding: 10, fontSize: 20 }}>
              <p>Suggestion：{this.state.des}</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rent;
