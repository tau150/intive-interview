// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
// export default createStore(combineReducers(reducers), applyMiddleware(thunk));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from '../modules/search/reducers';
import resultReducer from '../modules/results/reducers';
import notificationReducer from '../modules/notifications/reducers';
import uiReducer from '../modules/UI/reducers';

// import reducers from './reducers';

const rootReducer = combineReducers({
  searchFilters: searchReducer.searchFilters,
  players: resultReducer.players,
  loading: uiReducer.loading,
  toast: notificationReducer.toast,
});
export default createStore(rootReducer, applyMiddleware(thunk));
