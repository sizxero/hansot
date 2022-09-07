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
    findAllMenu: async() => {
        try {
            const res = await defaultInstance.get(`/menu/all`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findOneMenu: async(mnNo) => {
        try {
            const res = await defaultInstance.get(`/menu?mn=${mnNo}`);
            console.log(res);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;