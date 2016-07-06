import { ADD_TODO, COMPLETED_TODO, SET_VISIBILITY_FILTER} from '../constants/ActionTypes'

/*

Action Creators

*/
let nextTodoId = 0
export function addTodo(text){
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	};
}

export function completeTodo(id){
	return {type: COMPLETED_TODO, id};
}

export function setVisibilityFilter(filter){
	return {type: SET_VISIBILITY_FILTER, filter};
}

