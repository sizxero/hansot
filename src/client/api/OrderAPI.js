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
};

export default API;
