import React, {useState} from 'react';
import Item from './item';
import TaskForm from './taskForm';
import Done from './done';

import './App.css';


const App = (props) => {

  const [todo, setTodo] = useState([]);

  const handleArchive = (id) => {
    const updateTodo = [...todo];
    const index = updateTodo.findIndex(task => task.id === id);

    updateTodo[index].archived = true;

    setTodo(updateTodo);
  }

  const handleAdd = (task) => {
    if(task.text.trim() != ""){
        const updateTodo = [...todo];
        updateTodo.push(task)
        setTodo(updateTodo);
      }
  }

  const handleDelete = (id) => {
    const updateTodo = [...todo];
    const index = updateTodo.findIndex(task => task.id === id);

    updateTodo.splice(index, 1);

    setTodo(updateTodo);
  }

  return (
    <div class='container'>

      <h1>TO DO LIST en React</h1>
      
      <div class="flex">

        <div class="todo">
          <h2>To do :</h2>
  
          <ul>
            {todo.map(task => {
              if(task.archived === false){
                return (
                  <Item 
                    key={task.id}
                    task={task}
                    onDone={handleArchive}
                  />
                )
              }
            })}
          </ul>
          <TaskForm onNewTask={handleAdd}/>
        </div>
  
        <div class="done">
          <h2>Done :</h2>
    
          <ul class="archived">
          {todo.map(task => {
              if(task.archived === true){
                return (
                  <Done 
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                  />
                )
              }
            })}
          </ul>
        </div>
     </div>

    </div>
  );
}

export default App;
