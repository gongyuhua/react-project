import React from "react";
import { Row, Col, Input, message, Button, Form, Card } from "antd";

class Bmi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: "",
      level: ""
    };
  }
  //reset
  handleReset = e => {
    e.preventDefault();
    this.props.form.resetFields();
    this.setState({ bmi: "", level: "" });
  };
  //submit
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.success("please input your weight and height");
        return;
      }
      let w = values.weight; //weight
      let h = this.props.form.getFieldsValue().height; //height
      let bmi = (w / (h / 100) ** 2).toFixed(1);
      let level;
      if (bmi < 18.5) {
        level = 0;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        level = 1;
      } else if (bmi === 25) {
        level = 2;
      } else if (bmi >= 25 && bmi <= 29.9) {
        level = 3;
      } else if (bmi >= 30) {
        level = 4;
      }
      this.setState({ bmi: bmi, level: level });
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    let i = this.state.level;
    return (
      <div style={{ marginTop: 80 }}>
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" justify="center" className="rowItem">
            <Col span={10}>
              {getFieldDecorator("weight", {
                rules: [{ required: true }]
              })(<Input type="number" addonBefore="Weight:" addonAfter="kg" />)}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col span={10}>
              {getFieldDecorator("height", {
                rules: [{ required: true }]
              })(
                <Input type="number" addonBefore="Height：" addonAfter="cm" />
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col span={10}>
              <Button
                style={{ width: "50%" }}
                htmlType="submit"
                onSubmit={this.handleSubmit}
              >
                计算
              </Button>
              <Button style={{ width: "50%" }} onClick={this.handleReset}>
                重置
              </Button>
            </Col>
          </Row>
        </Form>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Input
              addonBefore="Your BMI："
              value={this.state.bmi}
              id="red"
              disabled
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col span={10}>
            <Card bodyStyle={{ padding: 0 }} id="cardWrap">
              <p className={i === 0 ? "activeP" : "die"}>
                Underweight{"<18.5"}
              </p>
              <p className={i === 1 ? "activeP" : "die"}>
                Normal{"18.5～24.9"}
              </p>
              <p className={i === 2 ? "activeP" : "die"}>Overweight{"=25"}</p>
              <p className={i === 3 ? "activeP" : "die"}>Obese{"25.0～29.9"}</p>
              <p className={i === 4 ? "activeP" : "die"}>
                Extremly Obese{"30.0～34.9"}
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
Bmi = Form.create()(Bmi);
export default Bmi;
