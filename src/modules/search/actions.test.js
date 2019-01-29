import { setSearchFilters } from './actions';
import * as types from '../../constants/actionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('search actions', () => {
	it('should setup setSearchFilters action object', () => {
		const store = mockStore();
		store.dispatch(
			setSearchFilters({
				name: null,
				selectedPosition: null,
				age: null
			})
		);
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.SEARCH_FILTERS);
		expect(actions[0].payload.filters).toEqual({
			name: null,
			selectedPosition: null,
			age: null
		});
	});
});
