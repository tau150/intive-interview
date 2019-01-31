import { getPlayers } from './selectors';
import moment from 'moment';

const playersSelector = [
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
	},
	{
		contractUntil: '2021-06-30',
		dateOfBirth: '1987-02-22',
		jerseyNumber: 20,
		name: 'Sergio Romero',
		nationality: 'Argentina',
		position: 'Keeper'
	}
];

const playersSelectorAgeFormatted = playersSelector.map(player => {
	player.age = moment([player.dateOfBirth])
		.fromNow(true)
		.split(' ')[0];

	return player;
});

describe('Selectors', () => {
	it('should return all players when filters are empty', () => {
		const players = getPlayers(playersSelectorAgeFormatted, {});

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '26',
					contractUntil: '2022-06-30',
					dateOfBirth: '1993-05-13',
					jerseyNumber: 9,
					name: 'Romelu Lukaku',
					nationality: 'Belgium',
					position: 'Centre-Forward'
				},
				{
					age: '29',
					contractUntil: '2019-06-30',
					dateOfBirth: '1990-11-07',
					jerseyNumber: 1,
					name: 'David de Gea',
					nationality: 'Spain',
					position: 'Keeper'
				},
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by name when a name is provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { name: 'David' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '29',
					contractUntil: '2019-06-30',
					dateOfBirth: '1990-11-07',
					jerseyNumber: 1,
					name: 'David de Gea',
					nationality: 'Spain',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by Position when Position is provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { selectedPosition: 'Keeper' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '29',
					contractUntil: '2019-06-30',
					dateOfBirth: '1990-11-07',
					jerseyNumber: 1,
					name: 'David de Gea',
					nationality: 'Spain',
					position: 'Keeper'
				},
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by Position when Position is provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { age: '26' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '26',
					contractUntil: '2022-06-30',
					dateOfBirth: '1993-05-13',
					jerseyNumber: 9,
					name: 'Romelu Lukaku',
					nationality: 'Belgium',
					position: 'Centre-Forward'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by name and Position when name and Position are provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { name: 'Sergio Romero', selectedPosition: 'Keeper' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by name and age when name and age are provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { name: 'Sergio', age: '32' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by name position and age when name position and age are provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, {
			name: 'Sergio',
			age: '32',
			selectedPosition: 'Keeper'
		});

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});

	it('should return players filters by age and position when age and position is provided', () => {
		const players = getPlayers(playersSelectorAgeFormatted, { selectedPosition: 'Keeper', age: '32' });

		expect(players).toEqual({
			selectedPlayers: [
				{
					age: '32',
					contractUntil: '2021-06-30',
					dateOfBirth: '1987-02-22',
					jerseyNumber: 20,
					name: 'Sergio Romero',
					nationality: 'Argentina',
					position: 'Keeper'
				}
			],
			notInitialFetching: true
		});
	});
});
