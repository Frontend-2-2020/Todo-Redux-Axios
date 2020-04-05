import React, { Component } from 'react';
import {connect} from "react-redux";
import Todo from './components/Todo';
import { getTodos } from './redux/actions/todoActions';

class App extends Component {
  componentDidMount() {
    this.props.getTodos()
  }
  
  render() {
    const {todos} = this.props;
    return (
      <ul>
        {todos.map(todo => <Todo todo={todo}/>)}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);