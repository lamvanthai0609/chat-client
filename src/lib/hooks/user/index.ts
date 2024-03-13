import { useDispatch } from '@/lib/store';
import { authSlice } from '@/lib/store/slices/auth';
import { getUserById } from '@/services/user';

import { useLocalStorage } from '../common/useLocalStorage';

export const useUser = () => {
    const dispatch = useDispatch();
    const { value, removeKey: removeToken } = useLocalStorage('token', '');
    const { removeKey: removeId } = useLocalStorage('userId', '');
    const handleUser = async (id: string) => {
        try {
            const respone = await getUserById(id);
            dispatch(
                authSlice.actions.setUser({
                    token: value,
                    user: respone,
                    isAuthenticated: true,
                })
            );
        } catch (error) {
            console.log(error);
            removeToken();
            removeId();
        }
    };

    return {
        handleUser,
    };
};
