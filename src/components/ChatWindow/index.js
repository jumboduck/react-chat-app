import React, { useEffect, useRef } from "react";
import MsgForm from "../MsgForm";

const ChatWindow = (props) => {
    const currentFriend = props.friends.find(
        (friend) => friend.id === props.currentConv
    ).name;
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
            {props.messages[props.currentConv].length !== 0 ? (
                <ul className="message-list" ref={messageList}>
                    {props.messages[props.currentConv].map((message, index) => (
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
