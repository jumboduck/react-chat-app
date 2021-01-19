import React, { useState } from "react";
import ChatWindow from "../ChatWindow";
import FriendList from "../FriendList";

/**
 * The chat application
 */
const ChatApp = () => {
    /**
     * The currentConv state determines the conversation currently rendered
     */
    const [currentConv, setCurrentConv] = useState("1");

    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    /**
     * The data object holds all friends and their related messages
     */
    const [data, setData] = useState({
        1: { name: "Daniel", messages: [] },
        2: { name: "Issaaf", messages: [] },
        3: { name: "Simon", messages: [] },
        4: { name: "Tracy", messages: [] },
        5: { name: "Whiskey", messages: [] },
    });

    /**
     * Add a message to the current conversation
     * @param {string} newMessage
     */
    const addNewMessage = (newMessage) => {
        const selectedConv = data[currentConv];
        const time = new Date().toLocaleString();
        selectedConv.messages.push({ message: newMessage, time: time });
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

    const updateMessage = (id, newMessage) => {
        const selectedConv = data[currentConv];
        const time = new Date().toLocaleString();
        selectedConv.messages[id].message = newMessage;
        selectedConv.messages[id].edit = time;
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
        setEditMode(false);
    };

    /**
     * Add a new friend with empty messages to the data state
     * @param {string} name
     */
    const addNewFriend = (name) => {
        const keys = Object.keys(data).map((x) => parseInt(x));
        const newKey = Math.max(...keys) + 1;
        const updatedData = { ...data };
        updatedData[newKey] = { name: name, messages: [] };
        setData(updatedData);
        setCurrentConv(newKey.toString());
    };

    return (
        <>
            <div className="chat-container">
                <FriendList
                    data={data}
                    currentConv={currentConv}
                    setCurrentConv={setCurrentConv}
                    addNewFriend={addNewFriend}
                    setEditMode={setEditMode}
                />
                <ChatWindow
                    messages={data[currentConv]}
                    addNewMessage={addNewMessage}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                    updateMessage={updateMessage}
                />
            </div>
        </>
    );
};

export default ChatApp;
