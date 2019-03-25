import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Switch } from "antd";
import Main from "./main";
import Top from "./header";
import Bottom from "./footer";
import { menuList } from "../../utils/data";
import { Link } from "react-router-dom";
import "./index.scss";

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
    console.log(this.props);
    this.defaultLoad();
  }
  defaultLoad() {
    if (sessionStorage.name) {
      this.props.history.push("/index");
    } else {
      this.props.history.push("/login");
    }
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
      <Layout className="containAll">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            {this.state.theme === "light" ? (
              <a>
                <Icon type="github" className="github" />
              </a>
            ) : (
              <a>
                <Icon type="github" className="github white" />
              </a>
            )}
            {this.state.theme === "light" ? (
              <span className="author">My Homepage</span>
            ) : (
              <span className="author white">My Homepage</span>
            )}
          </div>
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
                    key={item.url}
                    title={
                      <span>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                      </span>
                    }
                  >
                    {item.children.map((v, j) => {
                      return (
                        <Menu.Item key={v.url}>
                          <Link to={"/index/" + v.url}>{v.name}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={item.url}>
                  <Link to={"/" + item.url}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
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
          <Top
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            history={this.props.history}
          />
          <Main />
          <Bottom />
        </Layout>
      </Layout>
    );
  }
}

export default Index;
