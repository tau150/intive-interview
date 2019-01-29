import { startToast, cleanToast } from './actions';
import * as types from '../../constants/actionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('motifications actions', () => {
	it('should setup startToast action object', () => {
		const store = mockStore();
		store.dispatch(startToast('success', 'success message'));
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.START_TOAST);
		expect(actions[0].payload).toEqual({
			type: 'success',
			message: 'success message'
		});
	});

	it('should setup cleanToast action object', () => {
		const store = mockStore();
		store.dispatch(cleanToast());
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.CLEAN_TOAST);
	});
});
