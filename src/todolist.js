import React from 'react';
import {Todo} from './todo';

export class TodoList extends React.Component {

	componentDidMount() {
		console.log('mounted') //will not get called in server side rendering, shallow rendering
	}

	componentWillMount() {
		console.log('will mounted') //to fetch data in server side rendering
	}

	componentWillReceiveProps(nextProps){
		// will get called most of the time..as component will not get mounted everytime..
		// only the props are changing when /customer/1 is changed from /customer/2
		// virtual dom ..only diff is persisted to actual html dom
		// infact todolist component props are not changing...only todocomponent props are changing
	}

	componentWillUnmount() {

	}

	shouldComponentUpdate(nextProps, nextState){
		// as state is being maintained at top level, changing state will render the whole component
		// entire todolist will get rendered....so we need to ensure that the todo which is changed gets rendered...unchanged todos should not render
		// we need to use this function

		// state is at top level only...at todolist level
		// if we have state at todo level, then we need not write this method...but we should not maintain the state like this...

		// PureComponent has this method implemented...
		// if(this.props === nextProps && this.state === nextState) return false;
		return true;
	}

	constructor(props){
		super(props);
		this.state = {
			todos: [
				{id: 1, text: 'Todo 1', completed: false},
				{id: 2, text: 'Todo 2', completed: false}
			]
		};

		// call this.setState to update so that component gets rerendered...react will call forceUpdate() itself...
		// instead this.state.completed will not rerender...

		// this.ownState();
		// this.forceUpdate();
	}

	handleToggleCompleted(index) {
		// const newState = JSON.parse(JSON.stringify(this.state));
		// newState.todos[index].completed = !newState.todos[index].completed;
		// this.setState(newState);

		// this.state.todos[i].completed = false; dont do this as we cannot maintain states in this way
		
		let newTodos = this.state.todos.slice();
		newTodos[index].completed = !newTodos[index].completed;
		this.setState({todos: newTodos});
	};

	render() {
		return <ul>{
			this.state.todos.map((todo, i)=> <li key={todo.id}>
				<Todo completed={todo.completed} 
				      text={todo.text} 
				      onToggleCompleted={()=> this.handleToggleCompleted(i)}
				/>
			</li>)
			}</ul>;
	}
}