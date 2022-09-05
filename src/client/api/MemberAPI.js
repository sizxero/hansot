import { defaultInstance } from './AxiosInstance';
import { setCookie } from '../Cookie';

const API = {
    duplId : async (inputId) => {
        try {
            const res = await defaultInstance.get('/member/id/' + inputId);
            if (res.data.dupl) {
                alert(`${inputId} 중복된 아이디`);
            } else {
                alert(`${inputId} 사용할 수 있는 아이디`);
            }
        } catch(e) {
            console.log(e);
        }
    },
    signup: async(data) => {
        try {
            await defaultInstance.post('/member/signup', data);
            const res = await defaultInstance.get('/member/id/' + data.id);
            if (res.data.dupl) {
                alert('회원가입에 성공했습니다.');
                window.location.href = '/login';
            } else {
                alert('회원가입에 실패했습니다.');
            }
        } catch(e) {
            console.log(e);
        }
    },
    login: async(data) => {
        try {
            const res = await defaultInstance.post('/member/login', data);
            if(res.data.login) {
                alert('로그인에 성공했습니다.');
                setCookie('user', data.id);
                window.location.href = '/';
            } else {
                alert('로그인에 실패했습니다.')
            }
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;
