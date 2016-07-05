import { ADD_TODO, COMPLETE_TODO } from '../constants/ActionTypes'

const todo = (state, action) => {
	switch(action.type)
	{
		case ADD_TODO:
			return {
						text:action.text,
						completed: false
					};
		case COMPLETE_TODO:
			if(id === action.id)
				return Object.assign({}, state, {completed: true});
			return state;
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch(action.type){
		case ADD_TODO:
			return [
					...state.todos,
					todo(state, action)
				];
		case COMPLETE_TODO:
			return state.todos.map((t id) => todo(t, action));
		default:
			return state;
	}
}

export default todos;