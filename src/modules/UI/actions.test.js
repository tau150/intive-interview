import * as types from '../../constants/actionTypes';
import { startLoading, stopLoading } from './actions';

test('should setup startLoafing action object', () => {
	const action = startLoading();
	expect(action).toEqual({
		type: types.START_LOADING
	});
});

test('should setup stopLoading action object', () => {
	const action = stopLoading();
	expect(action).toEqual({
		type: types.STOP_LOADING
	});
});
