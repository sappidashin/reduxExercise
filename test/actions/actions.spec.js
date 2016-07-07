import expect from 'expect'
import * as actions from '../../actions/actions'
import * as types from '../../constants/ActionTypes'


describe('actions', () => {
	it('should create an action to add a todo', () => {
		const text = 'Finish docs'
		const expectedAction = {
			type: types.ADD_TODO,
			text,
			id: 0
		}
		expect(actions.addTodo(text)).toEqual(expectedAction)
	})

	it('should create an action to complete a todo', () => {
		const id = 1
		const expectedAction = {
			type: types.COMPLETED_TODO,
			id
		}
		expect(actions.completeTodo(id)).toEqual(expectedAction)
	})

	it('should create an action to set visibility filter of a todo item', () => {
		const filter = false
		const expectedAction = {
			type: types.SET_VISIBILITY_FILTER,
			filter
		}
		expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
	})
})

