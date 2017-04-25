import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {Todo} from '../src/todo';

chai.use(chaiEnzyme());

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
	})
})