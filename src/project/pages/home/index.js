import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Switch } from "antd";
import Main from "./main";
import Top from "./header";
import Bottom from "./footer";
import { menuList } from "../../utils/data";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Index extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      theme: "dark",
      current: "1"
    };
  }
  componentDidMount() {
    console.log(menuList);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
            {menuList.map((item, index) => {
              if (item.children && item.children.length > 0) {
                return (
                  <SubMenu
                    key={item.id}
                    title={
                      <span>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                      </span>
                    }
                  >
                    {item.children.map((v, j) => {
                      return <Menu.Item key={j}>{v.name}</Menu.Item>;
                    })}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={item.id}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Menu.Item>
              );
            })}
            {/*<Menu.Item key="1">
              <Icon type="mail" />
              Home Page
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Music</span>
                </span>
              }
            >
              <Menu.Item key="1">MusicList</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Tools</span>
                </span>
              }
            >
              <Menu.Item key="2">Applications</Menu.Item>
              <Menu.Item key="3">Editor</Menu.Item>
              <Menu.Item key="4">To-do List</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="setting" />
                  <span>Art Gallery</span>
                </span>
              }
            >
              <Menu.Item key="5">Pictures</Menu.Item>
            </SubMenu>*/}
            <Switch
              checked={this.state.theme === "dark"}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Menu>
        </Sider>
        <Layout>
          <Top />
          <Main />
          <Bottom />
        </Layout>
      </Layout>
    );
  }
}

export default Index;
