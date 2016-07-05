
import {combineReducers} from 'redux'

import {visibilityFilter} from '/visibilityFilter'
import {todos} from '/todos'

export default const todoApp = combineReducers({
	visibilityFilter,
	todos
});