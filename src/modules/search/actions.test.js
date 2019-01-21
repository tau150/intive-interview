import * as types from '../../constants/actionTypes';
import { setSearchFilters } from './actions';

test('should setup setSearchFilters action object', () => {
	const action = setSearchFilters({
		name: null,
		selectedPosition: null,
		age: null
	});
	expect(action).toEqual({
		type: types.SEARCH_FILTERS,
		payload: {
			filters: {
				name: null,
				selectedPosition: null,
				age: null
			}
		}
	});
});
