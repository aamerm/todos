import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {TodoList} from '../src/todolist';
import {Todo} from '../src/todo';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe ('TodoList', () => {
	let wrapper, props;

	beforeEach(() => {
		props = {
			todos: [
				{text: "hello", completed: false}
			],
			onToggleCompletedTodo: sinon.spy()
		}
		wrapper = shallow(<TodoList {...props} />);
	});

	it('should render the todos that are passed', () => {
		expect(wrapper).to.have.descendants('Todo');
		expect(wrapper.find('Todo')).to.have.prop('completed', false);
		expect(wrapper.find('Todo')).to.have.prop('text', 'hello');
	});

	it('should render Todo with completed as toggled when onToggleCompleted is called', () => {
		wrapper.find('Todo').first().simulate('toggleCompleted');
		expect(props.onToggleCompletedTodo).to.have.been.calledWith(0);
	});

	// it.only
});