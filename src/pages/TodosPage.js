import React from "react";
import { Link } from "react-router-dom";
import "../components/TodosPage.css";

const TodosPage = () => {
  return (
    <div className="todos-page-cont">
      <h1>TodosPage</h1>

      <br />
      <table className="ui celled table table-class">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description,</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Description">24</td>
            <td data-label="Status">Engineer</td>
            <td data-label="Actions">some action</td>
          </tr>
          <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Description">26</td>
            <td data-label="Status">Engineer</td>
            <td data-label="Actions">some action</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Description">24</td>
            <td data-label="Status">Designer</td>
            <td data-label="Actions">some action</td>
          </tr>
        </tbody>
      </table>

      <div className="button-cont">
        <Link to="/todos/create">
          <button className="ui primary button">Create Todo</button>
        </Link>
      </div>
    </div>
  );
};

export default TodosPage;
