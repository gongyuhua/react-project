import React from "react";
import { connect } from "react-redux";
import { add, del } from "../../action/action";

//@connect 连接  修饰器
@connect(state => ({
  abc: state.abc
}))
class Todo extends React.Component {
  submit2 = e => {
    e.preventDefault();
    if (!this.input.value) {
      return;
    }
    this.props.dispatch(
      add({
        //this.props   == store
        text: this.input.value,
        type: "ADD"
      })
    );
    this.input.value = "";
  };
  del = e => {
    e.preventDefault();
    if (!this.input.value) {
      return;
    }
    this.props.dispatch(
      del({
        //this.props   == store
        text: this.input.value,
        type: "DEL"
      })
    );
    this.input.value = "";
  };

  render() {
    return (
      <div>
        <h1>{this.props.aaa}</h1>
        <input
          placeholder="你想做点什么"
          ref={dom => (this.input = dom)}
          className="todo-input"
        />
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
        </button>
      </div>
    );
  }
}
export default Todo;
