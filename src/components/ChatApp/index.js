import React, { useState } from "react";
import ChatWindow from "../ChatWindow";
import FriendList from "../FriendList";

const ChatApp = () => {
    const [currentConv, setCurrentConv] = useState(1);

    const friends = [
        { id: 1, name: "Daniel" },
        { id: 2, name: "Issaaf" },
        { id: 3, name: "Simon" },
    ];

    const addNewMessage = (id, newMessage) => {
        let newMessages = { ...messages };
        newMessages[id].push(newMessage);
        setMessages(newMessages);
    };

    const [messages, setMessages] = useState({
        1: ["hi"],
        2: [],
        3: [],
    });

    return (
        <>
            <h1>Chat Window</h1>
            <FriendList
                friends={friends}
                currentConv={currentConv}
                setCurrentConv={setCurrentConv}
            />
            <ChatWindow
                messages={messages}
                currentConv={currentConv}
                addNewMessage={addNewMessage}
            />
        </>
    );
};

export default ChatApp;
