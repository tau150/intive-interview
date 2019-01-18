import * as types from '../../constants/actionTypes';

const initialState = {
  filters: {},
};

export default {
  searchFilters: (state = initialState, action) => {
    switch (action.type) {
      case types.SEARCH_FILTERS:
        return { ...state, filters: action.payload.filters };
      default:
        return state;
    }
  },
};
