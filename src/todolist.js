import React from 'react';
import {Todo} from './todo';

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

	handleToggleCompleted(index) {
		const newState = JSON.parse(JSON.stringify(this.state));
		newState.todos[index].completed = !newState.todos[index].completed;
		this.setState(newState);
		// this.state.todos[i].completed = false;
	};

	render() {
		return <ul>{
			this.state.todos.map((todo, i)=> <li>
				<Todo completed={todo.completed} 
				      text={todo.text} 
				      onToggleCompleted={()=> this.handleToggleCompleted(i)}
				/>
			</li>)
			}</ul>;
	}
}