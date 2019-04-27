import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_ROBOTS_PENDING, 
	REQUEST_ROBOTS_SUCCESS, 
	REQUEST_ROBOTS_FAILED 
} from './constants';

const intialStateSearch = {
	searchField: ''
}

// First Reducer (Search Field)
export const searchRobots = (state = intialStateSearch, action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			// returning new state
			return {...state, searchField: action.payload }
		default:
			return state;
	}
}

const intialStatRequest = {
	isPending: false,
	robots: [],
	error: ''
}

// Second Reducer (Fetching the data async with redux thunk)
export const requestRobots = (state = intialStatRequest, action = {}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return { ...state, isPending: true}
		case REQUEST_ROBOTS_SUCCESS:
			return { ...state, robots: action.payload, isPending: false}
		case REQUEST_ROBOTS_FAILED:
			return { ...state, error: action.payload, isPending: false}
		default:
			return state;
	}
}