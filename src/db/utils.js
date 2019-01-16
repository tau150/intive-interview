import axios from 'axios';

export const requireAll = ctx =>
	ctx
		.keys()
		.map(ctx)
		.map(m => m.default)
		.filter(Boolean);

export const axiosInstance = axios.create({
	baseURL: 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty'
});
