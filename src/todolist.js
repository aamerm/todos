import React from 'react';
import {Todo} from './todo';

export const TodoList = (props) => <ul>{
	props.todos.map((todo, i)=> <li key={todo.id}>
		<Todo completed={todo.completed}
		      text={todo.text}
		      onToggleCompleted={()=> props.onToggleCompletedTodo(i)}
		/>
	</li>)
}</ul>;