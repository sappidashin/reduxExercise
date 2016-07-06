import React from 'react'
import footer from './footer.js'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<footer />
	</div>
);

export default App