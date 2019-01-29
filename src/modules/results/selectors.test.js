import { getPlayers } from './selectors';
import moment from 'moment';

const playersSelector = [
	{
		contractUntil: '2022-06-30',
		dateOfBirth: moment(['1993-05-13'])
			.fromNow(true)
			.split(' ')[0],
		jerseyNumber: 9,
		name: 'Romelu Lukaku',
		nationality: 'Belgium',
		position: 'Centre-Forward'
	},
	{
		contractUntil: '2019-06-30',
		dateOfBirth: moment(['1990-11-07'])
			.fromNow(true)
			.split(' ')[0],
		jerseyNumber: 1,
		name: 'David de Gea',
		nationality: 'Spain',
		position: 'Keeper'
	},
	{
		contractUntil: '2019-06-30',
		dateOfBirth: moment(['1990-11-07'])
			.fromNow(true)
			.split(' ')[0],
		jerseyNumber: 1,
		name: 'Anderson Luciano',
		nationality: 'Spain',
		position: 'Keeper'
	}
];

describe('Selectors', () => {
	it('should return all players when filters are empty', () => {
		const players = getPlayers(playersSelector, {});

		expect(players).toEqual([
			{
				contractUntil: '2022-06-30',
				dateOfBirth: moment(['1993-05-13'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 9,
				name: 'Romelu Lukaku',
				nationality: 'Belgium',
				position: 'Centre-Forward'
			},
			{
				contractUntil: '2019-06-30',
				dateOfBirth: moment(['1990-11-07'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 1,
				name: 'David de Gea',
				nationality: 'Spain',
				position: 'Keeper'
			},
			{
				contractUntil: '2019-06-30',
				dateOfBirth: moment(['1990-11-07'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 1,
				name: 'Anderson Luciano',
				nationality: 'Spain',
				position: 'Keeper'
			}
		]);
	});

	it('should return players filters by name when a name is provided', () => {
		const players = getPlayers(playersSelector, { name: 'David' });

		expect(players).toEqual([
			{
				contractUntil: '2019-06-30',
				dateOfBirth: moment(['1990-11-07'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 1,
				name: 'David de Gea',
				nationality: 'Spain',
				position: 'Keeper'
			}
		]);
	});

	it('should return players filters by Position when Position is provided', () => {
		const players = getPlayers(playersSelector, { selectedPosition: 'Keeper' });

		expect(players).toEqual([
			{
				contractUntil: '2019-06-30',
				dateOfBirth: moment(['1990-11-07'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 1,
				name: 'David de Gea',
				nationality: 'Spain',
				position: 'Keeper'
			},
			{
				contractUntil: '2019-06-30',
				dateOfBirth: moment(['1990-11-07'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 1,
				name: 'Anderson Luciano',
				nationality: 'Spain',
				position: 'Keeper'
			}
		]);
	});

	it('should return players filters by Position when Position is provided', () => {
		const players = getPlayers(playersSelector, { age: 26 });

		expect(players).toEqual([
			{
				contractUntil: '2022-06-30',
				dateOfBirth: moment(['1993-05-13'])
					.fromNow(true)
					.split(' ')[0],
				jerseyNumber: 9,
				name: 'Romelu Lukaku',
				nationality: 'Belgium',
				position: 'Centre-Forward'
			}
		]);
	});

	// it('should return players filters by name and Position when name and Position are provided', () => {
	// 	const players = getPlayers(playersSelector, { name: 'Anderson Luciano', selectedPosition: 'Keeper' });

	// 	expect(players).toEqual([
	// 		{
	// 			contractUntil: '2019-06-30',
	// 			dateOfBirth: '1990-11-07',
	// 			jerseyNumber: 1,
	// 			name: 'David de Gea',
	// 			nationality: 'Spain',
	// 			position: 'Keeper'
	// 		},
	// 		{
	// 			contractUntil: '2019-06-30',
	// 			dateOfBirth: '1990-11-07',
	// 			jerseyNumber: 1,
	// 			name: 'Anderson Luciano',
	// 			nationality: 'Spain',
	// 			position: 'Keeper'
	// 		}
	// 	]);
	// });
});
