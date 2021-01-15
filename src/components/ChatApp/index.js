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

    const [messages, setMessages] = useState([
        "message1",
        "message2",
        "message3",
    ]);

    const addNewMessage = (newMessage) =>
        setMessages([...messages, newMessage]);

    // const [messages, setMessages] = useState({
    //     1: ["message1", "message2", "message3"],
    //     2: [],
    //     3: [],
    // });

    return (
        <>
            <h1>Chat Window</h1>
            <FriendList friends={friends} currentConv={currentConv} />
            <ChatWindow
                messages={messages}
                currentConv={currentConv}
                addNewMessage={addNewMessage}
            />
        </>
    );
};

export default ChatApp;
