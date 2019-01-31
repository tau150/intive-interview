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
			dispatch(stopLoading());

			dispatch(startToast('error', err.response.data.error));
			setTimeout(() => {
				dispatch(cleanToast());
			}, 2000);
		}
	};
};
