import React from "react";
import { connect } from "react-redux";
import { setVisibility } from "../../action/action";
import "./index.scss";

@connect(state => ({
  setVisibility: state.setVisibility
}))
class FilterLink extends React.Component {
  onClick = () => {
    var a = setVisibility({ filter: this.props.filter });
    this.props.dispatch(a);
  };

  render() {
    const { name, filter } = this.props; //parent component
    const active = this.props.setVisibility.filter === filter; //store
    return (
      <div className="todo-tab_item">
        <a
          style={{ color: active ? "#f01414" : "#4d555d" }}
          onClick={this.onClick}
        >
          {name}
        </a>
      </div>
    );
  }
}
export default FilterLink;
