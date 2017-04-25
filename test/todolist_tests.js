import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {TodoList} from '../src/todolist';
import {Todo} from '../src/todo';

chai.use(chaiEnzyme());

describe ('TodoList', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TodoList/>);
	});

	it('should render 2 default todos', () => {
		expect(wrapper.find('Todo')).to.have.length(2);
		// expect(wrapper).to.have.exactly(2).descendants('Todo');
	});

	it('should render first Todo with Text Todo 1 and completed false', ()=>{
		expect(wrapper.find('Todo').at(0)).to.have.prop('text', 'Todo 1');
		expect(wrapper.find('Todo').at(0)).to.have.prop('completed', false);
	})

	it('should render second Todo with Text Todo 2 and completed false', ()=>{
		const secondTodo = wrapper.find('Todo').at(1);
		expect(secondTodo).to.have.prop('text', 'Todo 2');
		expect(secondTodo).to.have.prop('completed', false);
	})
});