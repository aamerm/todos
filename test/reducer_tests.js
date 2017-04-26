import reducer from "../src/reducer";
import {expect} from 'chai';

describe('Reducers', () => {
	describe('INIT', () => {
		it('should return two todos when state is undefined', ()=> {
			const result = reducer(undefined, {});
			const expected = {
				todos: [
					{id: 1, text: 'Todo 1', completed: false},
					{id: 2, text: 'Todo 2', completed: false}
				]
			}
			expect(result).to.deep.equal(expected);
		})
	})

	describe('TOGGLE_COMPLETED', () => {
		it('should toggle completed at the todo of the passed index', ()=> {
			const oldState = {
				todos: [{id: 1, text: 'Todo 1', completed: false}]
			}
			const result = reducer(oldState, {type: 'TOGGLE_COMPLETED', index: 0})
			expect(result.todos[0].completed).to.be.true;
		})
	})
})