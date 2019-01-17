import * as types from '../../constants/actionTypes';

const initialState = {
	type: null,
	message: null
};

export default {
	toast: (state = initialState, action) => {
		switch (action.type) {
			case types.START_TOAST:
				return { ...state, type: action.payload.type, message: action.payload.message };
			case types.CLEAN_TOAST:
				return { ...state, type: null, message: null };
			default:
				return state;
		}
	}
};
