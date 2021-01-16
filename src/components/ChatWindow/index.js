import React, { useEffect, useRef } from "react";
import MsgForm from "../MsgForm";

const ChatWindow = (props) => {
    const currentFriend = props.messages.find(
        (friend) => friend.id === props.currentConv
    ).name;
    const messageList = useRef(null);

    const currentMessages = props.messages.find(
        (conv) => conv.id === props.currentConv
    ).messages;

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
                        <li className="message" key={index}>
                            {message}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-message">
                    This is the beginning of your conversation with{" "}
                    {currentFriend}
                </p>
            )}

            <MsgForm
                addNewMessage={props.addNewMessage}
                messages={props.messages}
                currentConv={props.currentConv}
            />
        </div>
    );
};

export default ChatWindow;
