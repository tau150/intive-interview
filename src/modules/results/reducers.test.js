import * as types from '../../constants/actionTypes';
import mock from './__mocks__/api';
import reducer from './reducers';

const initialState = { players: [] };

describe('results reducer', () => {
	it('should return the initial state', () => {
		expect(reducer.players(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_PLAYERS_START', () => {
		const action = {
			type: types.FETCH_PLAYERS_START
		};
		expect(reducer.players({}, action)).toEqual({});
	});

	it('should handle FETCH_PLAYERS_SUCCESS', () => {
		const players = mock.getPlayersMock();
		const action = {
			type: types.FETCH_PLAYERS_SUCCESS,
			payload: {
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
		};

		expect(reducer.players({}, action)).toEqual({
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
