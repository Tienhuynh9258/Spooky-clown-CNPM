import axios from 'axios';
import { API_SERVER_URL } from '../config';

export const CategoryAPI = {
    getAllMenu: () => axios.get(`${API_SERVER_URL}/api/categories`),
    getFoodOfCategory: (cate) => axios.get(`${API_SERVER_URL}/api/categories/${cate}`),
};
