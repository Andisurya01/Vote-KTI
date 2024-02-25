import axios from 'axios'
const BASH_URL = import.meta.env.VITE_REACT_APP_BASE_URL;


export const getCategory1 = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/category`);
        return response;
    } catch (error) {
        return error;
    }
};

export const createCategory1 = async (payload) => {
    try {
        const response = await axios.post(`${BASH_URL}/category`, payload);
        return response;
    } catch (error) {
        return error;
    }
}