import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Todo(props) {
  // isEditing state is used for conditional rendoring in the return statement
  const [isEditing, setEditing] = useState(false);
  // state for editing task name
  const [newName, setNewName] = useState(props.name);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  // set newName state when saving
  // newName and the todo id is passed to editTask function in App.js
  function handleSubmit(e) {
    e.preventDefault();
    if (newName !== "") {
      props.editTask(props.id, newName);
      setEditing(false);
    } else {
      alert("Please enter a task!");
      // TODO: refocus on input
    }
  }

  // Added this function for additional handlers
  function handleLabelClick() {
    setEditing(true);
  }

  const editingTemplate = (
    <Form className="stack-small" onSubmit={handleSubmit}>
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <input
          id={"text-input" + props.id}
          className="todo-text"
          data-cy="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          autoFocus={true}
        />
      </div>

      <div className="btn-group">
        <Button
          variant="secondary"
          type="button"
          className="todo-btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </Button>
        <Button
          variant="primary"
          size="sm"
          type="submit"
          className="todo-btn btn__primary todo-edit"
        >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </Button>
        <Button
          variant="danger"
          type="button"
          className="todo-btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </Button>
      </div>
    </Form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label
          className="todo-label"
          data-cy="todo-label"
          htmlFor={props.id}
          onClick={() => handleLabelClick()}
        >
          {props.name}
        </label>
      </div>
    </div>
  );

  // isEditing is set by onClick in the edit button
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
