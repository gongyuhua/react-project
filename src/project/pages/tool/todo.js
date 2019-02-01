import React, { Component } from "react";
import "antd/dist/antd.css";
import { add, del } from "../../action/action";
import { connect } from "react-redux";

class Todo extends Component {
  /*submit2 = event => {
    event.preventDefault();
    if (!this.input.value) {
      return "aa";
    }
    this.props.dispatch(
      //this.props === store
      add({
        text: this.input.value,
        type: "ADD"
      })
    );
    this.input.value = "";
  };
  del = event => {
    event.preventDefault();
    if (!this.input.value) {
      return "bb";
    }
    this.props.dispatch(
      del({
        text: this.input.value,
        type: "DEL"
      })
    );
    this.input.value = "";
  };*/

  render() {
    return (
      <div>
        333
        {/*<h1>{this.props.hanAc}</h1>
        <input placeholder="what do you want to do" className="todo-input" />
        <button
          type="submit"
          className="todo-btn"
          onClick={event => this.submit2(event)}
        >
          add
        </button>
        <button
          type="submit"
          className="todo-btn"
          onClick={event => this.del(event)}
        >
          del
    </button>*/}
      </div>
    );
  }
}

export default Todo;
