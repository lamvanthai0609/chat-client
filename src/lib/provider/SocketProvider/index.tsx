import React from "react"

import io from "socket.io-client";

import { useAuth } from "@/lib/hooks/auth";

export const SocketContext = React.createContext({});

export const SocketProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { user, isAuthenticated } = useAuth();
    const socket = React.useMemo(() => io(import.meta.env.VITE_API_SOCKET), []);
    socket.connect();
    React.useEffect(() => {
        if(isAuthenticated){
            socket.connect();
            socket.on("connect", () => {
                socket.emit("onConnected", { userId: user?._id });
            });
        }
        return () => {
            socket.disconnect();
        };
       
    }, [isAuthenticated,user?._id]);
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};