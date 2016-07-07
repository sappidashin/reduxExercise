import expect from 'expect'
import visibilityFilter from '../../reducers/visibilityFilter'
import { VisibilityFilters } from '../../constants/VisibilityFilters'
import { SET_VISIBILITY_FILTER } from '../../constants/ActionTypes'

describe('visibilityFilter reducer', () => {
	it('should return the initial state', () => {
		expect(visibilityFilter(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
	})

	it('should handle change of visibility filter', () => {
		var initState = VisibilityFilters.SHOW_ALL
		var action1 = { type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_COMPLETED}
		expect(visibilityFilter(initState, action1)).toEqual(VisibilityFilters.SHOW_COMPLETED)

		initState = VisibilityFilters.SHOW_COMPLETED;
		var action2 = { type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_ACTIVE}
		expect(visibilityFilter(initState, action2)).toEqual(VisibilityFilters.SHOW_ACTIVE)

		initState = VisibilityFilters.SHOW_ACTIVE;
		var action3 = { type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_ALL}
		expect(visibilityFilter(initState, action3)).toEqual(VisibilityFilters.SHOW_ALL)

	})
})