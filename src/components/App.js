import React from "react";
import ReactDOM from "react-dom";
import TodosPage from "../pages/TodosPage";
import TodosCreatePage from "../pages/TodosCreatePage";
import TodosEditPage from "../pages/TodosEditPage";
import Home from "../pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <div className="ui secondary pointing menu app-cont">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/todos">
            Todos
          </Link>
          <Link className="item" to="/todos/create">
            Create Todo
          </Link>
          <Link className="item" to="/todos/edit/:id">
            Edit Todo
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<TodosPage />} />
        <Route exact path="/todos/create" element={<TodosCreatePage />} />
        <Route exact path="/todos/edit/:id" element={<TodosEditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
