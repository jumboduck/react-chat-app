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
        1: { name: "Daniel", messages: [], saved: "", editMode: false },
        2: { name: "Issaaf", messages: [], saved: "", editMode: false },
        3: { name: "Simon", messages: [], saved: "", editMode: false },
        4: { name: "Tracy", messages: [], saved: "", editMode: false },
        5: { name: "Whiskey", messages: [], saved: "", editMode: false },
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
    const addNewMessage = (newMessage, direction) => {
        const selectedConv = data[currentConv];
        const time = new Date().toLocaleString();
        selectedConv.messages.push({
            message: newMessage,
            time: time,
            direction: direction,
        });
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

    const enterEditMode = (index) => {
        const savedMessage = data[currentConv].messages[index].message;
        setEditIndex(index);
        setSavedMsg(savedMessage);
        setEditMode(true);
        msgInput.current.focus();
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
        updatedData[newKey] = {
            name: name,
            messages: [],
            saved: "",
            editMode: false,
        };
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
                    editMode={editMode}
                    setEditMode={setEditMode}
                    msgInput={msgInput}
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
                    enterEditMode={enterEditMode}
                />
            </div>
        </>
    );
};

export default ChatApp;
