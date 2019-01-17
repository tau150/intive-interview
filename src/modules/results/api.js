import { axiosInstance as axios } from '../../db/utils';

export const fetchPlayersApi = () => {
	return axios.get();
};
