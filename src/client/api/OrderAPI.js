import { defaultInstance } from './AxiosInstance';

const API = {
    orderMenu : async (data) => {
        try {
            const res = await defaultInstance.post('/order', data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findOrderHistory: async(id) => {
        try {
            const res = await defaultInstance.get(`/order/history?id=${id}`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    findOrderOption: async(id) => {
        try {
            const res = await defaultInstance.get(`/order/option?id=${id}`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;
