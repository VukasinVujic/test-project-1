import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";
import "../components/TodoEditpage.css";

class TodosEditPage extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div className="todos-edit-cont">
        <h1>TodosEditPage</h1>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <label>Desciption</label>
            <input placeholder="Desciption" />
          </Form.Field>
          <Form.Group inline>
            <label>Status</label>
            <Form.Radio
              label="Small"
              value="sm"
              checked={value === "sm"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Medium"
              value="md"
              checked={value === "md"}
              onChange={this.handleChange}
            />
          </Form.Group>

          <button type="submit" className="ui blue button">
            Submit
          </button>
          <Link to="/todos">
            <button className="ui red button">Cancel</button>
          </Link>
        </Form>
      </div>
    );
  }
}

export default TodosEditPage;
