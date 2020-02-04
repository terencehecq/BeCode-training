import React from 'react';

const Done = ({task, onDelete}) => (
    <li>
        {task.text} <button onClick={() => onDelete(task.id)}><i class="fas fa-trash"></i></button>
    </li>
);

export default Done;