import {
  fetchPlayersStart,
  fetchPlayersSuccess,
  fetchPlayers,
} from './actions';
import { startLoading } from '../UI/actions';

import * as types from '../../constants/actionTypes';
const mock = jest.mock('./api');

test('should setup fetchPlayersStart action object', () => {
  const action = fetchPlayersStart();
  expect(action).toEqual({
    type: types.FETCH_PLAYERS_START,
  });
});

test('should setup fetchPlayersSuccess action object', () => {
  const action = fetchPlayersSuccess([
    {
      contractUntil: '2022-06-30',
      dateOfBirth: '1993-05-13',
      jerseyNumber: 9,
      name: 'Romelu Lukaku',
      nationality: 'Belgium',
      position: 'Centre-Forward',
    },
    {
      contractUntil: '2019-06-30',
      dateOfBirth: '1990-11-07',
      jerseyNumber: 1,
      name: 'David de Gea',
      nationality: 'Spain',
      position: 'Keeper',
    },
  ]);
  expect(action).toEqual({
    type: types.FETCH_PLAYERS_SUCCESS,
    payload: {
      players: [
        {
          contractUntil: '2022-06-30',
          dateOfBirth: '1993-05-13',
          jerseyNumber: 9,
          name: 'Romelu Lukaku',
          nationality: 'Belgium',
          position: 'Centre-Forward',
        },
        {
          contractUntil: '2019-06-30',
          dateOfBirth: '1990-11-07',
          jerseyNumber: 1,
          name: 'David de Gea',
          nationality: 'Spain',
          position: 'Keeper',
        },
      ],
    },
  });
});

// test('should setup fetchPlayers action object', async () => {
// 	// const data = await getPlayersMock();
// 	const loading = startLoading();
// 	expect(loading).toEqual({
// 		type: types.START_LOADING
// 	});
// 	const data = await mock.getPlayersMock();
// 	console.log(data);
// });

// The exact same test using async/await
// describe('#getUser() using async/await', () => {
// 	it('should load user data', async () => {
// 	  const data = await github.getUser('vnglst')
// 	  expect(data).toBeDefined()
// 	  expect(data.entity.name).toEqual('Koen van Gilst')
// 	})
//   })
