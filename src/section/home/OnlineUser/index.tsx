import UserImage from '@/assets/images/image_default.jpg';
import { useSelector } from '@/lib/store';

export const OnlineUser: React.FC = () => {
    const users = useSelector((state) => state.userOnline.users);
    return (
        <div tw="flex gap-2 flex-col items-start">
            {users &&
                users.map((user) => (
                    <div
                        tw="flex items-center gap-2 cursor-pointer hover:bg-blue-100 py-2 px-4"
                        key={user._id}
                    >
                        <img
                            tw="rounded-full w-10 h-10"
                            src={user.userId.image || UserImage}
                            alt={user.userId.name}
                        />
                        <span tw="text-xs">{user.userId.name}</span>
                    </div>
                ))}
        </div>
    );
};
