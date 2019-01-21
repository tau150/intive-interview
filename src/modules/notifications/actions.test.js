import { startToast, cleanToast } from './actions';
import * as types from '../../constants/actionTypes';

test('should setup startToast action object', () => {
	const action = startToast('success', 'success message');
	expect(action).toEqual({
		type: types.START_TOAST,
		payload: {
			type: 'success',
			message: 'success message'
		}
	});
});

test('should setup cleanToast action object', () => {
	const action = cleanToast();
	expect(action).toEqual({
		type: types.CLEAN_TOAST
	});
});
