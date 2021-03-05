import React, { useState } from "react";

function Form(props) {
  // sets initial name, defines function to modify name, array destructoring for name and setName
  const [name, setName] = useState('');

  // overrides default function of onSubmit, set in <form> attribute
  // calls addTask in app.js, to set the name of the task
  // TODO: add some verification for valid input
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  // get user input text, set in <input> attribute
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        autoFocus={true}
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg" id="add_task">
        Add
      </button>
    </form>
  );
}

export default Form;