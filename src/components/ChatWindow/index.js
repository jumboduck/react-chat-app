import React from "react";
import Message from "../Message";
import MsgForm from "../MsgForm";

const ChatWindow = (props) => {
    return (
        <>
            <ul>
                {props.messages[props.currentConv].map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </ul>
            <MsgForm
                addNewMessage={props.addNewMessage}
                messages={props.messages}
                currentConv={props.currentConv}
            />
        </>
    );
};

export default ChatWindow;
