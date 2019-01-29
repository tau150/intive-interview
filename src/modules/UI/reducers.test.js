import * as types from '../../constants/actionTypes';
import reducer from './reducers';

const initialState = { isLoading: false };

describe('UI reducer', () => {
	it('should return the initial state', () => {
		expect(reducer.loading(undefined, {})).toEqual(initialState);
	});

	it('should handle START_LOADING', () => {
		const action = {
			type: types.START_LOADING,
			payload: {
				isLoading: true
			}
		};
		expect(reducer.loading({}, action)).toEqual({
			isLoading: true
		});
	});

	it('should handle STOP_LOADING', () => {
		const action = {
			type: types.STOP_LOADING,
			payload: {
				isLoading: false
			}
		};
		expect(reducer.loading({}, action)).toEqual({
			isLoading: false
		});
	});
});
