import React, { useState } from "react";
import ChatWindow from "../ChatWindow";
import FriendList from "../FriendList";

const ChatApp = () => {
    const [currentConv, setCurrentConv] = useState("1");

    const [messages, setMessages] = useState([
        { id: "1", name: "Daniel", messages: ["hello"] },
        { id: "2", name: "Issaaf", messages: [] },
        { id: "3", name: "Simon", messages: [] },
        { id: "4", name: "Tracy", messages: [] },
        { id: "5", name: "Whiskey", messages: [] },
    ]);

    const addNewMessage = (id, newMessage) => {
        const selectedConv = messages.find((conv) => conv.id === id);
        selectedConv.messages.push(newMessage);
        let updatedMessages = messages.map((conv) =>
            conv.id !== id ? conv : selectedConv
        );
        setMessages(updatedMessages);
    };

    return (
        <>
            <div className="chat-container">
                <FriendList
                    messages={messages}
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
