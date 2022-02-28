import axios from './Axios';

const CREATE_FOOD = '/api/food';
const UPLOAD = '/api/photo'
const GET_DETAIL = '/api/food'
const EDIT_FOOD = '/api/food'
const REMOVE_FOOD = '/api/food'

export const createFood = async (body) => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: CREATE_FOOD,
            data: body,
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};
export const uploadPhoto = async (id, photo) => {
    try {
        const formData = new FormData()
        formData.append('idFood', id)
        formData.append('foodImage', photo)
        const { data } = await axios({
            method: 'POST',
            url: UPLOAD,
            data: formData,
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};
export const removePhoto = async (id) => {
    try {
        const { data } = await axios({
            method: 'DELETE',
            url: `${UPLOAD}/${id}`,
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};
export const getDetailFood = async (id) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${GET_DETAIL}/${id}`,
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};

export const editFoodItem = async (id, body) => {
    try {
        const { data } = await axios({
            method: 'PUT',
            url: `${EDIT_FOOD}/${id}`,
            data: body
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};

export const removeFoodItem = async (id) => {
    try {
        const { data } = await axios({
            method: 'DELETE',
            url: `${REMOVE_FOOD}/${id}`,
        });
        return {
            errCode: data.errCode,
            errDetail: data.errDetail,
            result: data.data,
        };
    } catch (error) {
        return {
            errCode: 1,
            errDetail: 'System error',
            result: null,
        };
    }
};