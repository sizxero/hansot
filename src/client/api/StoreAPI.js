import { defaultInstance } from './AxiosInstance';

const API = {
    findAllSido : async () => {
        try {
            const res = await defaultInstance.get('/store/sido');
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findGugun : async (sido) => {
        try {
            const res = await defaultInstance.get(`/store/gugun?sido=${sido}`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findAllStore: async() => {
        try {
            const res = await defaultInstance.get(`/store`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;
