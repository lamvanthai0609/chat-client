import { axiosClient } from '@/configs/axios';
import { IUser } from '@/lib/interfaces/auth';

export const getUserById = async (id: string): Promise<IUser> => {
    const res = await axiosClient.get(`/user/${id}`);
    return res as unknown as IUser;
};
