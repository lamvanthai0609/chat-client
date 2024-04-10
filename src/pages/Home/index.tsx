import { ChatCard } from '@/components/ChatCard';
import { Container } from '@/components/layout/Container';
import { OnlineUser } from '@/section/home/OnlineUser';

export const Home: React.FC = () => (
    <Container tw="flex-col">
        <OnlineUser />
        <ChatCard />
    </Container>
);
