import React, { useEffect, useRef } from "react";
import Message from "../Message";
import MsgForm from "../MsgForm";

const ChatWindow = (props) => {
    // const currentFriend = props.friends.find(
    //     (friend) => friend.id === props.currentConv
    // ).name;
    // console.log(currentFriend);
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
            <ul className="message-list" ref={messageList}>
                {props.messages[props.currentConv].length !== 0 ? (
                    props.messages[props.currentConv].map((message, index) => (
                        <Message key={index} message={message} />
                    ))
                ) : (
                    <li className="no-message">
                        This is the beginning of your conversation
                    </li>
                )}
            </ul>

            <MsgForm
                addNewMessage={props.addNewMessage}
                messages={props.messages}
                currentConv={props.currentConv}
            />
        </div>
    );
};

export default ChatWindow;
