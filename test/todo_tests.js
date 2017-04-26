import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {Todo} from '../src/todo';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('Todo', ()=>{
	let wrapper, props;

	beforeEach(() => {
		props = {text:"Hello", completed: false};
	});

	it('should render text passed', ()=>{
		const wrapper = shallow(<Todo {...props} />);
		expect(wrapper).to.include.text('Hello');
	})

	it('should render text in del if completed is true', ()=>{
		props.completed = true;
		const wrapper = shallow(<Todo {...props} />);
		expect(wrapper).to.have.descendants('del');
		expect(wrapper.find('del')).to.have.text('Hello');
	})

	it('should render toggle completed button', ()=>{
		const wrapper = shallow(<Todo {...props} />);
		expect(wrapper).to.have.descendants('button');
		expect(wrapper).to.include.text('✔');
	});

	it('should call onToggleCompleted when button is clicked', ()=> {
		const preventDefaultSpy = sinon.spy();
		props.onToggleCompleted = sinon.spy();

		wrapper = shallow(<Todo {...props} />);
		// wrapper.find('button').prop('onClick')({preventDefault: preventDefaultSpy});
		wrapper.find('button').simulate('click', {preventDefault: preventDefaultSpy});
		// expect(preventDefaultSpy.called).to.be.true;
		expect(preventDefaultSpy).to.be.called;
		
		// let isCalled=false;
		// const preventDefaultSpy = () => {isCalled=true;};
		// expect(isCalled).to.be.true;

		expect(props.onToggleCompleted).to.have.been.called;
	})
})