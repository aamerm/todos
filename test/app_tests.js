import chai, {expect} from 'chai';
// var chai = require('chai');
import {App} from '../src/app';
import {shallow} from 'enzyme';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('App', ()=> {
	it('should print 1 equals 1', () => {
		// if( 1!==1) throw new Error("failed");
		// chai.expect(2).to.equal(1);
		expect(1).to.equal(1);
	});

	it('should render h1 with todos', function() {
		const state = {todos: 1};
		const wrapper = shallow(<App />, {context: {store: {getState: ()=> state}}});
		// expect(wrapper.find('h1')).to.have.length(1);
		expect(wrapper).to.have.className('app');
		expect(wrapper).to.have.descendants('h1');
		expect(wrapper.find('h1')).to.have.text('Todos');
		expect(wrapper).to.have.descendants('TodoList');
		expect(wrapper.find('TodoList')).to.have.prop('todos').deep.equal(state.todos);
	});

	it('should dispatch with TOGGLE_COMPLETED and index when TodoList onToggleCompletedTodo is called', ()=> {
		const state = {todos: 1};
		const dispatchSpy = sinon.spy();
		const context = {
			context: {
				store: {
					getState: ()=> state,
					dispatch: dispatchSpy
				}
			}
		}
		const wrapper = shallow(<App />, context);
		wrapper.find('TodoList').simulate('toggleCompletedTodo', 0);
		expect(dispatchSpy).to.have.been.calledWith({type:'TOGGLE_COMPLETED', index: 0})
	})

});

// () =>
// function()