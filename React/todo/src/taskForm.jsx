import React, {useState} from 'react';

const TaskForm = (props) => {

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = new Date().getTime();
        const text = newTask;
        const archived = false;

        props.onNewTask({id, text, archived})

        setNewTask("");
    }

    const handleChange = (e) => {
        setNewTask(e.currentTarget.value);
    }

    return (
        <form onSubmit={handleSubmit} class="add">
            <input type="text" value={newTask} onChange={handleChange} placeholder="Ajouter une tâche"/>
            <button><i class="fas fa-plus-circle"></i></button>
        </form>
    )
} 

export default TaskForm;