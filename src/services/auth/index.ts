import { axiosClient } from '@/configs/axios';
import { ILogin, IUser } from '@/lib/interfaces/auth';

interface IAuthLoginResponse extends IUser {
    token: string;
}

export const authLogin = async (data: ILogin): Promise<IAuthLoginResponse> => {
    const res = await axiosClient.post('/auth/login', data);
    return res as unknown as IAuthLoginResponse;
};
