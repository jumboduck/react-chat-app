import React, { useState, useRef } from "react";
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
    const msgInput = useRef();

    /**
     * The data object holds all friends and their related messages
     */
    const [data, setData] = useState({
        1: { name: "Daniel", messages: [], saved: "" },
        2: { name: "Issaaf", messages: [], saved: "" },
        3: { name: "Simon", messages: [], saved: "" },
        4: { name: "Tracy", messages: [], saved: "" },
        5: { name: "Whiskey", messages: [], saved: "" },
    });

    const [savedMsg, setSavedMsg] = useState("");

    const updateSaved = (msg) => {
        const selectedConv = data[currentConv];
        selectedConv.saved = msg;
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

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
        setSavedMsg("");
    };

    /**
     * Add a new friend with empty messages to the data state
     * @param {string} name
     */
    const addNewFriend = (name) => {
        const keys = Object.keys(data).map((x) => parseInt(x));
        const newKey = Math.max(...keys) + 1;
        const updatedData = { ...data };
        updatedData[newKey] = { name: name, messages: [], saved: "" };
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
                    updateSaved={updateSaved}
                    savedMsg={savedMsg}
                    setSavedMsg={setSavedMsg}
                    setEditMode={setEditMode}
                />
                <ChatWindow
                    messages={data[currentConv]}
                    addNewMessage={addNewMessage}
                    updateSaved={updateSaved}
                    setSavedMsg={setSavedMsg}
                    savedMsg={savedMsg}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                    updateMessage={updateMessage}
                    msgInput={msgInput}
                />
            </div>
        </>
    );
};

export default ChatApp;
