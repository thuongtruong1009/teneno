import type {
    DeleteUserProfile,
    GetAllPublicUsersDto,
    GetUserProfileDto,
} from '@/dto';
import type { UpdateUserAvatar, UpdateUserCover } from '@/dto/files.dto';
import axiosConfig from './axios.config';

const ENDPOINT = '/users';

class UsersService {
    GetAllPublicUsers = (data: GetAllPublicUsersDto) => {
        const url = `${ENDPOINT}/all`;
        return axiosConfig.post(url, data);
    };

    GetPublicUserById = (userId: string) => {
        const url = `${ENDPOINT}/${userId}`;
        return axiosConfig.get(url);
    };

    DeleteUserById = (userId: string) => {
        const url = `${ENDPOINT}/${userId}`;
        return axiosConfig.delete(url);
    };

    GetUserProfile = (data: GetUserProfileDto) => {
        const url = `${ENDPOINT}/profile`;
        return axiosConfig.get(url, { params: data });
    };

    UpdateUserProfile = (data: any) => {
        const url = `${ENDPOINT}/profile`;
        return axiosConfig.put(url, data);
    };

    DeleteUserProfile = (data: DeleteUserProfile) => {
        const url = `${ENDPOINT}/profile`;
        return axiosConfig.delete(url, { data });
    };
}

export default new UsersService();
