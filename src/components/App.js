import React from "react";
import ReactDOM from "react-dom";
import TodosPage from "../pages/TodosPage";
import TodosCreatePage from "../pages/TodosCreatePage";
import TodosEditPage from "../pages/TodosEditPage";
import Home from "../pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos </Link>
            </li>
            <li>
              <Link to="/todos/create">Create Todo</Link>
            </li>
            <li>
              <Link to="/todos/edit/:id">Edit Todo</Link>
            </li>
          </ul>
        </nav>
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
