import React, { useState } from "react";
import ChatWindow from "../ChatWindow";
import FriendList from "../FriendList";

const ChatApp = () => {
    const [currentConv, setCurrentConv] = useState("1");

    const [data, setData] = useState({
        1: { name: "Daniel", messages: [] },
        2: { name: "Issaaf", messages: [] },
        3: { name: "Simon", messages: [] },
        4: { name: "Tracy", messages: [] },
        5: { name: "Whiskey", messages: [] },
    });

    const addNewMessage = (newMessage) => {
        const selectedConv = data[currentConv];
        const time = new Date().toLocaleString();
        selectedConv.messages.push({ message: newMessage, time: time });
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

    const addNewFriend = (name) => {
        const keys = Object.keys(data).map((x) => parseInt(x));
        const newKey = Math.max(...keys) + 1;
        const updatedData = { ...data };
        updatedData[newKey] = { name: name, messages: [] };
        setData(updatedData);
    };

    return (
        <>
            <div className="chat-container">
                <FriendList
                    data={data}
                    currentConv={currentConv}
                    setCurrentConv={setCurrentConv}
                    addNewFriend={addNewFriend}
                />
                <ChatWindow
                    messages={data[currentConv]}
                    addNewMessage={addNewMessage}
                />
            </div>
        </>
    );
};

export default ChatApp;
