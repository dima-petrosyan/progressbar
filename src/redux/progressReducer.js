const SET_DATA = 'SET-DATA'

const initialState = {
	items: [
		{name: 'Sold', color: '#bd1fbe', value: 677},
		{name: 'Got free', color: '#fc64ff', value: 24},
		{name: 'Burned', color: 'green', value: 202},
		{name: 'Free float', color: 'grey', value: 323},
	],
	height: 30,
	width: 10,
}

const progressReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA: 
			return {
				...state,
				items: action.items,
				height: action.height,
				width: action.width
			}
		default: 
			return state
	}
}

const setData = (items, height, width) => {
	return {
		type: SET_DATA,
		items,
		height,
		width
	}
}

// Thunk creator for async dispatch to get data from server

export default progressReducer















