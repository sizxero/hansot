import { defaultInstance } from './AxiosInstance';

const API = {
    findAllCategories: async() => {
        try {
            const res = await defaultInstance.get('/menu/categories');
        } catch(e) {
            console.log(e);
        }
    },
};

export default API;