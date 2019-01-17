import * as types from '../../constants/actionTypes';

const initialState = {
	players: []
};

export default {
	players: (state = initialState, action) => {
		switch (action.type) {
			case types.FETCH_PLAYERS_START:
				return { ...state };
			case types.FETCH_PLAYERS_SUCCESS:
				return { ...state, players: action.payload.players };
			default:
				return state;
		}
	}
};
