import React from 'react'
import FilterLink from '../containers/FilterLink'

const footer = () => (
	<p>
		show:
		{" "}
		<FilterLink filter="SHOW_ALL">
			ALL
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">
			ACTIVE
		</FilterLink>
		{", "}
		<FilterLink filter="SOHW_COMPLETED">
			COMPLETED
		</FilterLink>
	</p>
);

export default footer