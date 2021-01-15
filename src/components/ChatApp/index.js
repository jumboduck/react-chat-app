import React, { useState } from "react";
import ChatWindow from "../ChatWindow";

const ChatApp = () => {
    const [currentConv, setCurrentConv] = useState(1);

    const friends = {
        1: "Daniel",
        2: "Issaaf",
        3: "Simon",
    };

    const [messages, setMessages] = useState([
        "message1",
        "message2",
        "message3",
    ]);

    function addNewMessage(chatLog, newMessage) {
        setMessages([...chatLog, newMessage]);
    }

    // const [messages, setMessages] = useState({
    //     1: ["message1", "message2", "message3"],
    //     2: [],
    //     3: [],
    // });

    return (
        <>
            <h1>Chat Window</h1>
            <ChatWindow
                messages={messages}
                friend={friends[currentConv]}
                id={currentConv}
                addNewMessage={addNewMessage}
            />
        </>
    );
};

export default ChatApp;
