import React, { useEffect, useRef } from "react";
import MsgForm from "../MsgForm";
import Message from "../Message";

const ChatWindow = (props) => {
    const currentFriend = props.messages.name;
    const currentMessages = props.messages.messages;

    const messageList = useRef(null);

    useEffect(() => {
        if (messageList) {
            messageList.current.addEventListener("DOMNodeInserted", (event) => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight });
            });
        }
    }, []);

    return (
        <div className="chat-window">
            {currentMessages.length !== 0 ? (
                <ul className="message-list" ref={messageList}>
                    {currentMessages.map((message, index) => (
                        <li key={index}>
                            <Message message={message} />
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <ul className="message-list" ref={messageList}></ul>
                    <p className="no-message">
                        This is the beginning of your conversation with{" "}
                        {currentFriend}
                    </p>
                </>
            )}

            <MsgForm addNewMessage={props.addNewMessage} />
        </div>
    );
};

export default ChatWindow;
