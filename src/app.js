import React from 'react';
import {TodoList} from './todolist'
// const PropTypes = require('prop-types');
import PropTypes from 'prop-types';

export class App extends React.Component {
	componentWillMount() {
		this.context.store.subscribe(()=>{
			this.forceUpdate();
		})
	}

	render() {
		return <div className="app">
			<h1>Todos</h1>
			<TodoList
				todos={this.context.store.getState().todos}
				onToggleCompletedTodo={(index)=>this.context.store.dispatch({type: 'TOGGLE_COMPLETED', index:index})}
			/>
		</div>;
	}
}

App.contextTypes = {
	store: PropTypes.object
};
