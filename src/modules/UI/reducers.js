import * as types from '../../constants/actionTypes';

const initialState = {
	isLoading: false
};

export default {
	loading: (state = initialState, action) => {
		switch (action.type) {
			case types.START_LOADING:
				return { ...state, isLoading: true };
			case types.STOP_LOADING:
				return { ...state, isLoading: false };

			default:
				return state;
		}
	}
};
