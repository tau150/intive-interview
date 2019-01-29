import { fetchPlayersStart, fetchPlayersSuccess, fetchPlayers } from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../constants/actionTypes';
import { axiosInstance } from '../../db/utils';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install(axiosInstance));
afterEach(() => moxios.uninstall(axiosInstance));

describe('results actions', () => {
	it('should setup fetchPlayersStart action object', () => {
		const store = mockStore();
		store.dispatch(fetchPlayersStart());
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.FETCH_PLAYERS_START);
	});

	it('should setup fetchPlayersSuccess action object', () => {
		const store = mockStore();
		store.dispatch(
			fetchPlayersSuccess([
				{
					contractUntil: '2022-06-30',
					dateOfBirth: '1993-05-13',
					jerseyNumber: 9,
					name: 'Romelu Lukaku',
					nationality: 'Belgium',
					position: 'Centre-Forward'
				},
				{
					contractUntil: '2019-06-30',
					dateOfBirth: '1990-11-07',
					jerseyNumber: 1,
					name: 'David de Gea',
					nationality: 'Spain',
					position: 'Keeper'
				}
			])
		);
		const actions = store.getActions();
		expect(actions.length).toBe(1);
		expect(actions[0].type).toBe(types.FETCH_PLAYERS_SUCCESS);
		expect(actions[0].players).not.toBeNull();
		expect(actions[0].payload.players).toEqual([
			{
				contractUntil: '2022-06-30',
				dateOfBirth: '1993-05-13',
				jerseyNumber: 9,
				name: 'Romelu Lukaku',
				nationality: 'Belgium',
				position: 'Centre-Forward'
			},
			{
				contractUntil: '2019-06-30',
				dateOfBirth: '1990-11-07',
				jerseyNumber: 1,
				name: 'David de Gea',
				nationality: 'Spain',
				position: 'Keeper'
			}
		]);
	});

	it('fetch players action success', () => {
		moxios.stubRequest('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', {
			status: 200,
			response: {
				players: [
					{
						contractUntil: '2022-06-30',
						dateOfBirth: '1993-05-13',
						jerseyNumber: 9,
						name: 'Romelu Lukaku',
						nationality: 'Belgium',
						position: 'Centre-Forward'
					},
					{
						contractUntil: '2019-06-30',
						dateOfBirth: '1990-11-07',
						jerseyNumber: 1,
						name: 'David de Gea',
						nationality: 'Spain',
						position: 'Keeper'
					}
				]
			}
		});

		const store = mockStore();

		return store.dispatch(fetchPlayers()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toBe(types.START_LOADING);
			expect(actions[1].type).toBe(types.FETCH_PLAYERS_SUCCESS);
			expect(actions[2].type).toBe(types.STOP_LOADING);
			expect(actions[1].payload.players).toEqual({
				players: [
					{
						contractUntil: '2022-06-30',
						dateOfBirth: '1993-05-13',
						jerseyNumber: 9,
						name: 'Romelu Lukaku',
						nationality: 'Belgium',
						position: 'Centre-Forward'
					},
					{
						contractUntil: '2019-06-30',
						dateOfBirth: '1990-11-07',
						jerseyNumber: 1,
						name: 'David de Gea',
						nationality: 'Spain',
						position: 'Keeper'
					}
				]
			});
		});
	});

	it('fetch players action with error', () => {
		moxios.stubRequest('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', {
			status: 404,
			response: {
				error: 'ERROR'
			}
		});

		const store = mockStore();

		return store.dispatch(fetchPlayers()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toBe(types.START_LOADING);
			expect(actions[1].type).toBe(types.STOP_LOADING);
			expect(actions[2].type).toBe(types.START_TOAST);
			expect(actions[2].payload).toEqual({ type: 'error', message: 'ERROR' });
		});
	});
});
