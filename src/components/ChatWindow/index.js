import React, { useEffect, useRef } from "react";
import MsgForm from "../MsgForm";
import Message from "../Message";

const ChatWindow = (props) => {
    const currentFriend = props.messages.name;
    const messageList = useRef(null);

    const currentMessages = props.messages.messages;

    // useEffect(() => {
    //     if (messageList) {
    //         messageList.current.addEventListener("DOMNodeInserted", (event) => {
    //             const { currentTarget: target } = event;
    //             target.scroll({ top: target.scrollHeight });
    //         });
    //     }
    // }, []);

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
                <p className="no-message">
                    This is the beginning of your conversation with{" "}
                    {currentFriend}
                </p>
            )}

            <MsgForm addNewMessage={props.addNewMessage} />
        </div>
    );
};

export default ChatWindow;
