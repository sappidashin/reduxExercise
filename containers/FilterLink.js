import { setVisibilityFilter} from '../actions/actions'
import { connect } from 'react-redux'
import link from '../components/link'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(link)

export default FilterLink