import React, { Component } from "react";
import { Table, Select } from "antd";
import fetchJsonp from "fetch-jsonp";

const Option = Select.Option;

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      loading: true
    };
  }
  columns = () => {
    return [
      {
        dataIndex: "rowIndex",
        title: "Number",
        width: 50
      },
      {
        dataIndex: "title",
        title: "title",
        width: 200
      },
      {
        dataIndex: "author",
        title: "Singer",
        width: 200
      },
      {
        dataIndex: "country",
        title: "Country",
        width: 150
      },
      {
        dataIndex: "language",
        title: "Language",
        width: 200
      },
      {
        dataIndex: "publishtime",
        title: "Time",
        width: 150
      }
    ];
  };
  rowSelection = () => {
    return {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };
  };
  componentDidMount() {
    this.getList("2"); //default value
  }
  getList(typeId) {
    fetchJsonp(
      `http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`,
      {
        method: "get"
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        const songArray = [];
        let songList = data.song_list;
        for (let i = 0; i < songList.length; i++) {
          songArray.push({
            title: songList[i].title,
            author: songList[i].author,
            country: songList[i].country,
            language: songList[i].language,
            publishtime: songList[i].publishtime
          });
        }
        this.setState({
          lists: songArray,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleChange(value) {
    this.getList(value);
  }
  render() {
    var selectorData = [
      { name: "Hot Music", id: 2 },
      { name: "New Music", id: 1 },
      { name: "Rap Music", id: 11 },
      { name: "Jazz Music", id: 12 },
      { name: "Popular Music", id: 16 }
    ];
    return (
      <div>
        <div>
          {this.props.aaa}
          <Select
            defaultValue={selectorData[0].name}
            style={{ width: 120 }}
            onChange={value => this.handleChange(value)}
          >
            {selectorData.map(function(item, index) {
              return (
                <Option key={index} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </div>
        <Table
          rowSelection={this.rowSelection()}
          columns={this.columns()}
          loading={this.state.loading}
          dataSource={this.state.lists.map((item, index) => ({
            ...item,
            rowIndex: index + 1
          }))}
        />
        ,
      </div>
    );
  }
}

export default Music;
