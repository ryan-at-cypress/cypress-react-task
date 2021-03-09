import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTodo(props) {
  // sets initial name, defines function to modify name, array destructoring for name and setName
  const [name, setName] = useState('');

  // overrides default function of onSubmit, set in <form> attribute
  // calls addTask in app.js, to set the name of the task
  // TODO: add some verification for valid input
  function handleSubmit(e) {
    e.preventDefault();
    if (name !== ''){
      props.addTask(name);
      setName("");
    }
    else {
      alert('Please enter a task!');
    }
    

  }

  // get user input text, set in <input> attribute
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="header-text">
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What should we get done?
          </label>
        </h2>
      </div>
      <Form.Control
        type="text"
        id="new-todo-input"
        data-cy="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        autoFocus={true}
        value={name}
        onChange={handleChange}
      />
      <div>
      <Button type="submit" className="btn btn__primary btn-block" id="add_task">
        Add Task
      </Button>
      </div>
    </Form>
  );
}

export default AddTodo;