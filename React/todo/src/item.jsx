import React from 'react';

const Item = ({task, onDone}) => (
    <li>
        {task.text} <button onClick={() => onDone(task.id)}><i class="fas fa-check-circle"></i></button>
    </li>
);

export default Item;