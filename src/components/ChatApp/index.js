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

    /** The editMode state defines if a message is being edited or not */
    const [editMode, setEditMode] = useState(false);

    /** editIndex holds the index of the message currently being edited */
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

    /**
     * The savedMsg state hold the text currently displayed in the message input
     */
    const [savedMsg, setSavedMsg] = useState("");

    /**
     * Add a message to the current conversation
     * @param {string} newMessage
     * @param {string} direction
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
        setSavedMsg("");
    };

    /**
     * The following function saves any unsent message to that current conversation
     * object
     * @param {string} msg The saved message
     */
    const updateSaved = (msg) => {
        const selectedConv = data[currentConv];
        selectedConv.saved = msg;
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

    /**
     * The following finds the message to be edited, adds this
     * message to the text input and focuses on it.
     * @param {number} index The index of the message to be edited
     */
    const enterEditMode = (index) => {
        const savedMessage = data[currentConv].messages[index].message;
        setEditIndex(index);
        setSavedMsg(savedMessage);
        setEditMode(true);
        msgInput.current.focus();
    };

    /**
     * This message updates a message and turns off "edit mode"
     * @param {string} newMessage The updated message
     */
    const updateMessage = (newMessage) => {
        if (newMessage.trim().length > 0) {
            const selectedConv = data[currentConv];
            const time = new Date().toLocaleString();
            selectedConv.messages[editIndex].message = newMessage;
            selectedConv.messages[editIndex].edit = time;
            const updatedData = { ...data };
            updatedData[currentConv] = selectedConv;
            setData(updatedData);
        }
        setEditMode(false);
        setSavedMsg("");
    };

    /**
     * Add a new friend with empty messages to the data state
     * And open this conversation.
     * @param {string} name The name of the new friend
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
