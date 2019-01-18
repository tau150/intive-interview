import * as types from '../../constants/actionTypes';

export const setSearchFilters = filters => {
  return {
    type: types.SEARCH_FILTERS,
    payload: {
      filters,
    },
  };
};
