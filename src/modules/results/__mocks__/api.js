const players = [
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
];

export default {
	getPlayersMock: () => {
		return new Promise((resolve, reject) => {
			resolve({ response: players });
			reject({
				error: 'there was an error'
			});
		});
	}
};
