import chai, {expect} from 'chai';
// var chai = require('chai');
import {App} from '../src/app';
import {shallow} from 'enzyme';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('App', ()=> {
	it('should print 1 equals 1', () => {
		// if( 1!==1) throw new Error("failed");
		// chai.expect(2).to.equal(1);
		expect(1).to.equal(1);
	});

	it('should render h1 with todos', function(){
		const wrapper = shallow(<App />);
		// expect(wrapper.find('h1')).to.have.length(1);
		expect(wrapper).to.have.className('app');
		expect(wrapper).to.have.descendants('h1');
		expect(wrapper.find('h1')).to.have.text('Todos');
		expect(wrapper).to.have.descendants('TodoList');
	});

});

// () =>
// function()