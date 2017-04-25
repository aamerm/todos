import React from 'react';

export const Todo = (props) => <span>
<button>✔</button>
{props.completed ? <del>{props.text}</del>: props.text}
</span>;