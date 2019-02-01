import React, { Component } from "react";
import { Form, Icon, Input, Button, notification } from "antd";
import "./login.css";

class LoginPage extends Component {
  handleSubmit = e => {
    e.preventDefault(); //prevent dubbed bubbling
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.userName === "123" && values.password === "123") {
          this.props.history.push("/index");
          sessionStorage.setItem("name", values.userName); //save to sessionStorage
        } else {
          this.openNotificationWithIcon("error");
        }
      }
    });
  };
  openNotificationWithIcon = type => {
    notification[type]({
      message: "please type in correct username and password",
      description: "User name is 123 "
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in please
        </Button>
      </Form>
    );
  }
}
const Login = Form.create()(LoginPage);
export default Login;
