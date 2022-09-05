import { defaultInstance } from './AxiosInstance';

const API = {
    duplId : async (inputId) => {
        try {
            const res = await defaultInstance.get('/member/id/' + inputId);
            console.log(res);
            if (res.data.dupl) {
                alert('중복된 아이디');
            } else {
                alert('사용할 수 있는 아이디');
            }
        } catch(e) {
            console.log(e);
        }
    },
    login: async(data) => {
        try {
            await defaultInstance.post('/login', data);
        } catch(e) {

        }
    }
};

export default API;
