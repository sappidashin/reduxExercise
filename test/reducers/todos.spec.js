import expect from 'expect'
import todos from '../../reducers/todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(todos(undefined, {})).toEqual([]);
	})

	it('should handle ADD_TODO', () => {
		var action = {
			type: types.ADD_TODO,
			text: 'Run the tests',
			id: 0
		};
		var expected = [			
			{
				text:action.text,
				completed: false,
				id: action.id
			}			
		]

		expect(todos(undefined, action)).toEqual(expected)

		var action2 = {
			type: types.ADD_TODO,
			text: 'Use Redux',
			id: 1
		};

		var expected2 = [			
			{
				text:action.text,
				completed: false,
				id: action.id
			},
			{
				text:action2.text,
				completed: false,
				id: action2.id
			}
		]
		
		expect(todos(expected, action2)).toEqual(expected2)
	})

	it('should handle COMPLETED_TODO', () => {
		var action = {type: types.COMPLETED_TODO, id: 0}
		var prevState = [
			{
				text: 'Run the tests',
				id: 0,
				completed: false
			}
		]

		var expectedState = [
			{
				text: 'Run the tests',
				id: 0,
				completed: true
			}
		]

		expect(todos(prevState, action)).toEqual(expectedState)	
	})

});