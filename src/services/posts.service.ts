import type {
  DeleteOnePostDto,
  GetAllPostsDto,
  GetAllPublicPostsDto,
  UpdatePostsDto,
  UpsertReactPostDto,
} from '@/dto';
import axiosConfig from './axios.config';

const ENDPOINT = '/posts';

class PostsService {
  GetAllPostsById(userId: string) {
    const url = `${ENDPOINT}/posts`;
    return axiosConfig.post(url, userId);
  }

  GetAllPosts = (data: GetAllPostsDto) => {
    const url = `${ENDPOINT}/private/all`;
    return axiosConfig.post(url, data);
  };

  GetAllPublicPosts = (userId: string, data: GetAllPublicPostsDto) => {
    const url = `${ENDPOINT}/${userId}/all`;
    return axiosConfig.get(url, data);
  };

  GetOnePostById = (postId: string) => {
    const url = `${ENDPOINT}/${postId}`;
    return axiosConfig.get(url);
  };

  UpdatePost = (data: UpdatePostsDto) => {
    const url = `${ENDPOINT}/update`;
    return axiosConfig.patch(url, data);
  };

  DeleteOnePost = (data: DeleteOnePostDto) => {
    const url = `${ENDPOINT}/delete`;
    return axiosConfig.delete(url, data);
  };

  UpsertReactPost = (data: UpsertReactPostDto) => {
    const url = `${ENDPOINT}/reaction`;
    return axiosConfig.post(url, data);
  };
}
export default new PostsService();
