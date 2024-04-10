import React from 'react';

import Tippy from '@tippyjs/react';

import UserImage from '@/assets/images/image_default.jpg';

import { Container } from '../layout/Container';

export const ChatCard: React.FC = () => {
    const [isMinimized, setIsMinimized] = React.useState(false);
    return (
        <>
            {isMinimized ? (
                <Tippy content="hihihi">
                    <img
                        src={UserImage}
                        alt=""
                        tw="w-6 h-6 rounded-full"
                        onClick={() => setIsMinimized(false)}
                    />
                </Tippy>
            ) : (
                <Container tw="flex-col w-[240px] h-[360px] border">
                    <Container>
                        <Container tw="items-center gap-2">
                            <img src={UserImage} alt="" tw="w-6 h-6 rounded-full" />
                            <span tw="text-sm">123</span>
                        </Container>
                        <button
                            tw="text-sm cursor-pointer mx-2 flex-1"
                            onClick={() => setIsMinimized(true)}
                        >
                            {'>'}
                        </button>
                    </Container>
                    <Container>
                        <input type="text" />
                        <button>Send</button>
                    </Container>
                    <div>123</div>
                </Container>
            )}
        </>
    );
};
