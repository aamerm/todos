import React from 'react';
import {Todo} from './todo';

const handleToggleCompleted = () => {
	
};

export class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos: [
				{text: 'Todo 1', completed: false},
				{text: 'Todo 2', completed: false}
			]
		};

		// call this.setState to update so that component gets rerendered...react will call forceUpdate() itself...
		// instead this.state.completed will not rerender...

		// this.ownState();
		// this.forceUpdate();
	}
	
	render() {
		return <ul>{
			this.state.todos.map(todo=> <li>
				<Todo completed={todo.completed} text={todo.text}/>
			</li>)
			}</ul>;
	}
}