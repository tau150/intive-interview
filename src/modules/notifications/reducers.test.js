import * as types from '../../constants/actionTypes';
import reducer from './reducers';

const initialState = { type: null, message: null };

describe('notifications reducer', () => {
	it('should return the initial state', () => {
		expect(reducer.toast(undefined, {})).toEqual(initialState);
	});

	it('should handle START_TOAST', () => {
		const action = {
			type: types.START_TOAST,
			payload: {
				type: 'success',
				message: 'toast message'
			}
		};
		expect(reducer.toast({}, action)).toEqual({ type: 'success', message: 'toast message' });
	});

	it('should handle CLEAN_TOAST', () => {
		const action = {
			type: types.CLEAN_TOAST
		};
		expect(reducer.toast({}, action)).toEqual({ type: null, message: null });
	});
});
