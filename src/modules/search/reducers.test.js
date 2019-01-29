import * as types from '../../constants/actionTypes';
import reducer from './reducers';

const initialState = { filters: {} };

describe('search reducer', () => {
	it('should return the initial state', () => {
		expect(reducer.searchFilters(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_PLAYERS_START', () => {
		const action = {
			type: types.SEARCH_FILTERS,
			payload: {
				filters: {
					age: 18,
					selectedPosition: 'Keeper',
					name: 'Raul'
				}
			}
		};
		expect(reducer.searchFilters({}, action)).toEqual({
			filters: { age: 18, selectedPosition: 'Keeper', name: 'Raul' }
		});
	});
});
