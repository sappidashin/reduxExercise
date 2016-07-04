import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from './actions'
import {VisibilityFilters} from './actions'


const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};


function todos(state = [], action){
	switch(action.type){
		case ADD_TODO:
			return [
					...state.todos,
					{
						text:action.text,
						completed: false
					}
				];
		case COMPLETE_TODO:
			return state.todos.map((todo id) => {
					if(id === action.id)
						return Object.assign({}, todo, {completed:true});

					return todo;
				});
		default:
			return state;
	}
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
	switch(action.type)
	{
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todoApp(state = initialState, action){
	return {
		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
		todos: todos(state.todos, action)
	};
}