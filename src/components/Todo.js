import React, { Component } from 'react';
import {connect} from "react-redux";
import { toggleTodo } from '../redux/actions/todoActions';

class Todo extends Component {
    render() {
        const {todo, toggleTodo} = this.props;
        return (
            <li>
                <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)}/>{todo.name}
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: todo => dispatch(toggleTodo(todo))
  });

export default connect(undefined, mapDispatchToProps)(Todo);