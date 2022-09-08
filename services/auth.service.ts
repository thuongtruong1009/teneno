import axiosConfig from './axios.config';

const ENDPOINT = '/auth';

class AuthService {
    SignUpLocalRequest = (user: any) => {
        const url = `${ENDPOINT}/signup`;
        return axiosConfig.post(url, user);
    };

    SignInLocalRequest = (user: any) => {
        const url = `${ENDPOINT}/signin`;
        return axiosConfig.post(url, user);
    };

    LogoutRequest = () => {
        const url = `${ENDPOINT}/logout`;
        return axiosConfig.post(url);
    };

    RefreshRequest = () => {
        const url = `${ENDPOINT}/refresh`;
        return axiosConfig.post(url);
    };

    UpdatePasswordRequest = (user: any) => {
        const url = `${ENDPOINT}/password`;
        return axiosConfig.put(url, user);
    };
}

export default new AuthService();
