import React from "react";
import Message from "../Message";
import MsgForm from "../MsgForm";

const ChatWindow = () => {
    return (
        <>
            <ul>
                <Message />
            </ul>
            <MsgForm />
        </>
    );
};

export default ChatWindow;
