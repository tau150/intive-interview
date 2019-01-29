import * as types from '../../constants/actionTypes';
import { startLoading, stopLoading } from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('UI actions', () => {
	it('should setup startLoading action object', () => {
		const store = mockStore();
		store.dispatch(startLoading());
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.START_LOADING);
	});

	it('should setup stopLoading action object', () => {
		const store = mockStore();
		store.dispatch(stopLoading());
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.STOP_LOADING);
	});
});
