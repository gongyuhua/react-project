import React, { Component } from "react";
import "antd/dist/antd.css";
import ReactEcharts from "echarts-for-react";

class EchartList extends Component {
  render() {
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: this.props.data,
          type: this.props.type,
        }
      ]
    };

    return (
      <ReactEcharts
        option={option}
        style={{ width: "100%", height: "300px" }}
      />
    );
  }
}

export default EchartList;
