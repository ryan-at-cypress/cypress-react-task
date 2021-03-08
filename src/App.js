import React, { useState } from "react";

import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App(props) {

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    let a = tasks.slice();
    a.unshift(newTask);
    setTasks(a);
    // setTasks({arr: a});
    // setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    // returns array of tasks not equal to the deleted id
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }  

  function toggleTaskCompleted(id) {
    let updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });

    let a = updatedTasks.slice();
    updatedTasks.forEach((task) => {
      if (task.completed === true) {
          a.push(a.splice(a.indexOf(task), 1)[0]);
        }
      });

  updatedTasks = a;

    // // move task to end
    // let a = tasks.slice();
    // a.push(a.splice(a.indexOf(task), 1)[0]);
    // console.log(a);
    // setTasks(a);
    // console.log(tasks);

    setTasks(updatedTasks);
  }
  
  function getActiveTaskCount(params) {
    let activeTasks = 0;
    // return activeTasks;

    // loop through tasks
    // count completed

    let a = tasks.slice();
    let aLength = a.length;
    for (let i = 0; i < aLength; i++) {
        if (a[i].completed === false) {
          activeTasks++;
        }
    }
    return activeTasks;
  }

  const [tasks, setTasks] = useState(props.tasks);
  
  // maps objects from DATA to taskList
  const taskList = tasks.map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );

  // get number of active tasks for heading text
  let activeTaskCount = getActiveTaskCount();
  const tasksNoun = activeTaskCount!== 1 ? 'tasks' : 'task';
  const headingText = `${activeTaskCount} ${tasksNoun} remaining`;
  
  return (
    <Container className="p-5">
      <Row className="justify-content-md-center">
      <div className="todoapp stack-large">
        <Jumbotron>
        <Container fluid className="p-4">
          <AddTodo addTask={addTask} />
          <h2 id="list-heading">{headingText}</h2>
          <ul
            // role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            {taskList}
          </ul>
          </Container>
        </Jumbotron>
      </div>
      </Row>
    </Container>
  );
}

export default App;