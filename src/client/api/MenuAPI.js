import { defaultInstance } from './AxiosInstance';

const API = {
    findAllCategories: async() => {
        try {
            const res = await defaultInstance.get('/menu/categories');
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findMainCategories: async() => {
        try {
            const res = await defaultInstance.get('/menu/categories/main');
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findCtgMenu: async(ctgNo) => {
        try {
            const res = await defaultInstance.get(`/menu/subctg?ctg=${ctgNo}`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
};

export default API;