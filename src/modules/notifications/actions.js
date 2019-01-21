import * as types from '../../constants/actionTypes';

export const startToast = (type, message) => {
	return {
		type: types.START_TOAST,
		payload: {
			type,
			message
		}
	};
};

export const cleanToast = () => {
	return {
		type: types.CLEAN_TOAST
	};
};
