import React, { useState, useEffect, useRef } from "react";
import generatePhrase from "./../../helpers/generatePhrase.js";
import MsgForm from "../MsgForm";
import Message from "../Message";

/**
 * This renders the entire chat window, including the list of messages and the
 * input for new messages.
 */
const ChatWindow = (props) => {
    const currentFriend = props.messages.name;
    const currentMessages = props.messages.messages;
    const messageList = useRef(null);

    /**
     * This effect ensures the pages scrolls to the bottom of the page if the
     * height of the message list is longer than the height of its container
     */
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
                {currentMessages.length !== 0
                    ? currentMessages.map((message, index) => (
                          <li key={index}>
                              <Message
                                  message={message}
                                  enterEditMode={props.enterEditMode}
                                  index={index}
                                  editMode={props.editMode}
                                  editIndex={props.editIndex}
                              />
                          </li>
                      ))
                    : null}
            </ul>

            {currentMessages.length === 0 ? (
                <p className="no-message">
                    This is the beginning of your conversation with{" "}
                    {currentFriend}
                </p>
            ) : null}

            <MsgForm
                addNewMessage={props.addNewMessage}
                updateSaved={props.updateSaved}
                setSavedMsg={props.setSavedMsg}
                savedMsg={props.savedMsg}
                currentMessages={currentMessages}
                addNewMessage={props.addNewMessage}
                updateMessage={props.updateMessage}
                editMode={props.editMode}
                setEditMode={props.setEditMode}
                editIndex={props.editIndex}
                enterEditMode={props.enterEditMode}
                lastMessageIndex={currentMessages.length - 1}
                msgInput={props.msgInput}
            />
        </div>
    );
};

export default ChatWindow;
