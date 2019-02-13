import React from "react";
import { connect } from "react-redux";
import { addTodo, delTodo, toggleTodo } from "../../action/action";
import "../../pages/tool/index.scss";
import FilterLink from "./filterLink";
import "./index.scss";

@connect(state => ({
  todoList: state.todoList,
  setVisibility: state.setVisibility
}))
class Todo extends React.Component {
  submit = e => {
    var todoLength = this.props.todoList.length;
    e.preventDefault();
    if (!this.input.value) {
      return;
    }
    this.props.dispatch(
      addTodo({
        //this.props   == store
        id: todoLength++,
        text: this.input.value,
        check: false,
        type: "ADD_TODO"
      })
    );
    this.input.value = "";
  };
  del = id => {
    this.props.dispatch(
      delTodo({
        //this.props   == store
        id: id,
        type: "DEL_TODO"
      })
    );
  };

  toggleTodo = id => {
    this.props.dispatch(
      toggleTodo({
        //this.props   == store
        id: id,
        type: "TOGGLE_TODO"
      })
    );
  };

  render() {
    const { todoList, setVisibility } = this.props; //store
    let todos = todoList;
    if (setVisibility.filter === "SHOW_COMPLETED") {
      todos = todoList.filter(t => t.check);
    } else if (setVisibility.filter === "SHOW_ACTIVE") {
      todos = todoList.filter(t => !t.check);
    }
    return (
      <div className="todo-box">
        <div className="todo-innerBox">
          <div className="todo-tab" />
          <FilterLink filter="SHOW_ALL" name="All tasks" />
          <FilterLink filter="SHOW_COMPLETED" name="Completed tasks" />
          <FilterLink filter="SHOW_ACTIVE" name="To-do tasks" />
        </div>
        <ul className="list-group">
          {todos.map(todo => (
            <li
              className="todo-list_li"
              style={{ textDecoration: todo.check ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                className="check-box"
                checked={todo.check}
                onClick={id => this.toggleTodo(todo.id)}
              />
              {todo.text}
              <button
                className="todo-list_del"
                onClick={id => this.del(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form className="todo-add">
          <input
            placeholder="what do you want to do"
            ref={dom => (this.input = dom)} //callback function to get the real DOM value
            className="todo-input"
          />
          <button
            type="submit"
            className="todo-btn"
            onClick={event => this.submit(event)}
          >
            Add tasks
          </button>
        </form>
      </div>
    );
  }
}
export default Todo;
