import { instance } from './authAPI';

export const fetchTodayAPI = async () => {
    const { data } = await instance.get('/today');
    return data;
};