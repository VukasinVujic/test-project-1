import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../actions";
import "../components/TodosPage.css";

class TodosPage extends React.Component {
  // createListTodos() {
  //   return this.props.todos.map((todo) => {
  //     return (
  //       <li key={todo.id}>
  //         {todo.name} {todo.description}
  //       </li>
  //     );
  //   });
  // }

  giveTodos() {
    return this.props.todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td data-label> {todo.name} </td>
          <td data-label> {todo.description} </td>
          <td data-label> {todo.status} </td>
          <td className="action-button">
            <Link to="/todos/edit/:id">
              <button className="ui green button">Edit</button>
            </Link>
            <button className="ui orange button">Done/Undo</button>
            <button className="ui red button">Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="todos-page-cont">
        <h1>TodosPage</h1>

        <br />

        {/* <ul>{this.createListTodos()}</ul> */}

        <table className="ui celled table table-class">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.giveTodos()}
            {/* <tr>
              <td data-label="Name">James</td>
              <td data-label="Description">24</td>
              <td data-label="Status">Engineer</td>
              <td data-label="Actions" className="action-button">
                <Link to="/todos/edit/:id">
                  <button className="ui green button">Edit</button>
                </Link>
                <button className="ui orange button">Done/Undo</button>
                <button className="ui red button">Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Jill</td>
              <td data-label="Description">26</td>
              <td data-label="Status">Engineer</td>
              <td data-label="Actions" className="action-button">
                <Link to="/todos/edit/:id">
                  <button className="ui green button">Edit</button>
                </Link>
                <button className="ui orange button">Done/Undo</button>
                <button className="ui red button">Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Elyse</td>
              <td data-label="Description">24</td>
              <td data-label="Status">Designer</td>
              <td data-label="Actions" className="action-button">
                <Link to="/todos/edit/:id">
                  <button className="ui green button">Edit</button>
                </Link>
                <button className="ui orange button">Done/Undo</button>
                <button className="ui red button">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>

        <div className="button-cont">
          <Link to="/todos/create">
            <button className="ui primary button">Create Todo</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos })(TodosPage);
