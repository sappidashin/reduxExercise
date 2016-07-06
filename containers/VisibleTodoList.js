import {VisibilityFilters} from '../constants/VisibilityFilters'
import { completeTodo} from '../actions/actions'
import { connect } from 'react-redux'
import TodoList from '../components/todoList'

const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			console.log([dispatch, id]);
			dispatch(completeTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList