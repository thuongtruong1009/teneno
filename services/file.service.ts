import type { UploadAvatarDto, UploadCoverDto, UploadPostsDto } from '@/dto';
import axiosConfig from './axios.config';

const ENDPOINT = '/files';

export class FileService {
    uploadAvatar(data: UploadAvatarDto, onUploadProgress: any) {
        const url = `${ENDPOINT}/avatar`;

        const formData = new FormData();
        formData.append('file', data);

        return axiosConfig.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        });
    }

    uploadCover(data: UploadCoverDto, onUploadProgress: any) {
        const url = `${ENDPOINT}/cover`;

        const formData = new FormData();
        formData.append('file', data);

        return axiosConfig.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        });
    }

    uploadPost(data: UploadPostsDto, onUploadProgress: any) {
        const url = `${ENDPOINT}/posts`;

        const formData = new FormData();
        formData.append('files', data);

        return axiosConfig.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        });
    }
}
