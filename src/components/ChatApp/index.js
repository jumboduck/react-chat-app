import React, { useState } from "react";
import ChatWindow from "../ChatWindow";
import FriendList from "../FriendList";

const ChatApp = () => {
    const [currentConv, setCurrentConv] = useState(1);

    const friends = [
        { id: 1, name: "Daniel" },
        { id: 2, name: "Issaaf" },
        { id: 3, name: "Simon" },
        { id: 4, name: "Tracy" },
        { id: 5, name: "Whiskey" },
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
        4: [],
        5: [],
    });

    return (
        <>
            <div className="chat-container">
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
            </div>
        </>
    );
};

export default ChatApp;
