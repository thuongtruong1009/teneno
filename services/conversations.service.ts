import type {
    CreateNewConversationDto,
    DeleteConversationAdminsDto,
    GetAllConversationsDto,
    UpdateConversationMembersDto,
    UpdateConversationRoles,
    UpdateOneConversationByIdDto,
} from '@/dto';
import axiosConfig from './axios.config';

const ENDPOINT = '/conversations';

class ConversationsService {
    CreateNewConversation = (data: CreateNewConversationDto) => {
        const url = `${ENDPOINT}`;
        return axiosConfig.post(url, data);
    };

    GetAllConversations = (data: GetAllConversationsDto) => {
        const url = `${ENDPOINT}`;
        return axiosConfig.get(url, data);
    };

    GetOneConversationById = (conversationId: string) => {
        const url = `${ENDPOINT}/${conversationId}`;
        return axiosConfig.get(url);
    };

    UpdateOneConversationById = (
        conversationId: string,
        data: UpdateOneConversationByIdDto,
    ) => {
        const url = `${ENDPOINT}/${conversationId}`;
        return axiosConfig.patch(url, data);
    };

    DeleteOneConversationById = (conversationId: string) => {
        const url = `${ENDPOINT}/${conversationId}`;
        return axiosConfig.delete(url);
    };

    UpdateConversationMembers = (
        conversationId: string,
        data: UpdateConversationMembersDto,
    ) => {
        const url = `${ENDPOINT}/${conversationId}/updateMembers`;
        return axiosConfig.patch(url, data);
    };

    DeleteConversationAdmins = (
        conversationId: string,
        data: DeleteConversationAdminsDto,
    ) => {
        const url = `${ENDPOINT}/${conversationId}/updateAdmins`;
        return axiosConfig.patch(url, data);
    };

    UpdateConversationRoles = (
        conversationId: string,
        data: UpdateConversationRoles,
    ) => {
        const url = `${ENDPOINT}/${conversationId}/updateRoles`;
        return axiosConfig.patch(url, data);
    };
}

export default new ConversationsService();
