import notificationReducer from './reducers';
import * as types from '../../constants/actionTypes';

let state = {};
const initialState = { type: null, message: null };

test('reducer should return state for default case', () => {
	const action = notificationReducer.toast((state = initialState), 'action');
	expect(action).toEqual(state);
});

// test('reducer should return state for default case', () => {
// 	const action = notificationReducer.toast({ type: null, message: null }, types.START_TOAST);
// 	expect(action).toEqual({
// 		...state,
// 	});
// });

// const initialState = {
// 	type: null,
// 	message: null
// };

// export default {
// 	toast: (state = initialState, action) => {
// 		switch (action.type) {
// 			case types.START_TOAST:
// 				return { ...state, type: action.payload.type, message: action.payload.message };
// 			case types.CLEAN_TOAST:
// 				return { ...state, type: null, message: null };
// 			default:
// 				return state;
// 		}
// 	}
// };
