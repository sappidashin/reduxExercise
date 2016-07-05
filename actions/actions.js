import * as types from '../constants/ActionTypes'

/*

Action Creators

*/

export function addTodo(text){
	return {
		type: types.ADD_TODO,
		text
	};
}

export function completeTodo(id){
	return {type: types.COMPLETE_TODO, id};
}

export function setVisibilityFilter(filter){
	return {type: types.SET_VISIBILITY_FILTER, filter};
}

