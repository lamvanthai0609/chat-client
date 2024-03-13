import React from 'react';

import { useLogin } from '@/lib/hooks/auth';

export const Login: React.FC = () => {
    const [type, setType] = React.useState('password');
    const handleType = () => {
        setType((prev) => (prev === 'password' ? 'text' : 'password'));
    };
    const { handleLogin, password, setPassword, setUsername, username } = useLogin();
    return (
        <div tw="font-[sans-serif] text-[#333]">
            <div tw="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div tw="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
                    <div
                        tw="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] 
                    max-md:mx-auto"
                    >
                        <form tw="space-y-6">
                            <div tw="mb-10">
                                <h3 tw="text-3xl font-extrabold">Sign in</h3>
                                <p tw="text-sm mt-4">
                                    Sign in to your account and explore a world of possibilities.
                                    Your journey begins here.
                                </p>
                            </div>
                            <div>
                                <label tw="text-sm mb-2 block">User name</label>
                                <div tw="relative flex items-center">
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        tw="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                        placeholder="Enter user name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        tw="w-[18px] h-[18px] absolute right-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="10" cy="7" r="6" data-original="#000000" />
                                        <path
                                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 
                                            0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 
                                            2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label tw="text-sm mb-2 block">Password</label>
                                <div tw="relative flex items-center">
                                    <input
                                        name="password"
                                        type={type}
                                        required
                                        tw="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        tw="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                                        viewBox="0 0 128 128"
                                        onClick={handleType}
                                    >
                                        <path
                                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504
                                             22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 
                                             67.496 
                                             105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 
                                             50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 
                                             13.447 
                                             56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 
                                             24 10.766 
                                             24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 
                                             16-7.178 
                                             16-16-7.178-16-16-16z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div tw="flex items-center justify-between gap-2">
                                <div tw="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        tw="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" tw="ml-3 block text-sm">
                                        Remember me
                                    </label>
                                </div>
                                <div tw="text-sm">
                                    <a tw="text-blue-600 hover:underline">Forgot your password?</a>
                                </div>
                            </div>
                            <div tw="!mt-10">
                                <button
                                    type="button"
                                    tw="w-full shadow-xl py-2.5 px-4 text-sm font-semibold 
                                    rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                                    onClick={handleLogin}
                                >
                                    Log in
                                </button>
                            </div>
                            <p tw="text-sm !mt-10 text-center">
                                Don't have an account{' '}
                                <a tw="text-blue-600 hover:underline ml-1 whitespace-nowrap">
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                    <div tw="lg:h-[400px] md:h-[300px] max-md:mt-10">
                        <img
                            src="https://readymadeui.com/login-image.webp"
                            tw="w-full h-full object-cover"
                            alt="Dining Experience"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
