import React from 'react';

export const Todo = (props) => <span>
<button onClick={(e)=> {e.preventDefault(); props.onToggleCompleted();}}>✔</button>
{props.completed ? <del>{props.text}</del>: props.text}
</span>;