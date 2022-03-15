import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../actions";
import "../components/TodosPage.css";

const TodosPage = () => {
  let data = useSelector((state) => state);
  const dispatch = useDispatch();

  const giveTodos = () => {
    return data.todos.map((todo) => {
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
  };

  return (
    <div className="todos-page-cont">
      <h1>TodosPage</h1>

      <br />

      <table className="ui celled table table-class">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{giveTodos()}</tbody>
      </table>

      <div className="button-cont">
        <Link to="/todos/create">
          <button className="ui primary button">Create Todo</button>
        </Link>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { todos: state.todos };
// };

// export default connect(mapStateToProps, { fetchTodos })(TodosPage);

export default connect()(TodosPage);
