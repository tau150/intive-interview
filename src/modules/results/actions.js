import * as types from '../../constants/actionTypes';
import { startLoading, stopLoading } from '../UI/actions';
import { fetchPlayersApi } from './api';
import { startToast, cleanToast } from '../notifications/actions';

export const fetchPlayersStart = () => {
	return {
		type: types.FETCH_PLAYERS_START
	};
};

export const fetchPlayersSuccess = players => {
	return {
		type: types.FETCH_PLAYERS_SUCCESS,
		payload: {
			players
		}
	};
};

export const fetchPlayers = () => {
	return async dispatch => {
		dispatch(startLoading());

		try {
			const players = await fetchPlayersApi();
			dispatch(fetchPlayersSuccess(players.data));
			dispatch(stopLoading());
		} catch (err) {
			dispatch(startToast('error', err.response.data.error));
			setTimeout(() => {
				dispatch(cleanToast());
			}, 2000);
		}

		// try {
		//   const response = await axiosInstance.post("/auth/login", authData);
		//   localStorage.setItem("token", response.data.token);
		//   localStorage.setItem("expiresIn", Date.now() + response.data.expiresIn);
		//   localStorage.setItem("userId", response.data.user.id);
		//   localStorage.setItem("roleId", response.data.user.role_id);
		//   localStorage.setItem("userEmail", response.data.user.email);
		//   dispatch(authSuccess(response.data.token, response.data.user));
		//   dispatch(cleanLoading());
		//   dispatch(notification("Logueado con éxito", false, "/"));
		// } catch (err) {
		//   dispatch(cleanLoading());
		//   dispatch(notification(err.response.data.error, true));
		// }
	};
};
