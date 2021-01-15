import React from "react";
import Message from "../Message";
import MsgForm from "../MsgForm";

const ChatWindow = (props) => {
    return (
        <>
            <h2>Conversation with {props.friend}</h2>
            <ul>
                {props.messages.map((message) => (
                    <li key={message}>{message}</li>
                ))}
            </ul>
            <MsgForm />
        </>
    );
};

export default ChatWindow;
