import { ADD_TODO, COMPLETED_TODO } from '../constants/ActionTypes'

const todo = (state, action) => {
	switch(action.type)
	{
		case ADD_TODO:
			return {
						text:action.text,
						completed: false,
						id: action.id
					};
		case COMPLETED_TODO:
			if(state.id === action.id)
				return Object.assign({}, state, {completed: !state.completed});
			return state;
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch(action.type){
		case ADD_TODO:
			return [
					...state,
					todo(undefined, action)
				];
		case COMPLETED_TODO:
			return state.map(t => todo(t, action));
		default:
			return state;
	}
}

export default todos;