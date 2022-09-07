import { defaultInstance } from './AxiosInstance';

const API = {
    findAllCategories: async() => {
        try {
            const res = await defaultInstance.get('/menu/categories');
            console.log(res);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findMainCategories: async() => {
        try {
            const res = await defaultInstance.get('/menu/categories/main');
            console.log(res);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
};

export default API;