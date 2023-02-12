import { useEffect, useState } from "react";
import io from "socket.io-client";
import { getProfile } from "../../infrastructure/utils/authUtils";
let socket:any;


const useChat = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [allMessages, setAllMessages] = useState<any>([]);
    const [id, setId] = useState("");
    

    useEffect(() => {
        socketInitializer();
        setUsername(getProfile()?.username);
        setId(getProfile().iat);

        // console.log('id', id)

        return () => {
        socket = io();
        socket.disconnect();
        };
    }, []);

    async function socketInitializer() {
        await fetch('/api/socket')

        socket = io();
        socket.on("receive-message", (data:any) => {
        console.log('data', data)
        setAllMessages((pre:any) => [...pre, data]);
        });
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        socket.emit("send-message", {
        id,
        username,
        message,
        });

        setMessage("");
    }

    return {message, setMessage, username, setUsername, allMessages, setAllMessages, handleSubmit}
}

export default useChat;