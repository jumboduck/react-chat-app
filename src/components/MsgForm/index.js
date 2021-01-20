import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";
import Picker from "emoji-picker-react";

/**
 * This renders the form to send a new message.
 */
const MsgForm = (props) => {
    const input = props.msgInput.current;

    /** This functions handles the submission of the new message form */
    const handleSubmit = (event) => {
        event.preventDefault();
        let trimmedMsg = input.value.trim();
        if (trimmedMsg.length > 0 && !props.editMode) {
            props.addNewMessage(props.savedMsg);
            props.setSavedMsg("");
        }

        if (props.editMode) {
            props.updateMessage(props.editIndex, props.savedMsg);
        }
    };

    const handleChange = (event) => {
        props.setSavedMsg(event.currentTarget.value);
    };

    /** This state defines if the emoji picker is visible or not */
    const [displayEmojis, setDisplayEmojis] = useState(false);

    /**
     * This function handles displaying or hiding the emoji picker on click
     * @param {onClick} event
     */
    const handleDisplayPicker = (event) => {
        event.preventDefault();
        setDisplayEmojis(!displayEmojis);
    };

    /** Edit the latest message when up arrow is pressed */
    const handleKeyPress = (event) => {
        if (
            event.keyCode === 38 &&
            props.lastMessageIndex >= 0 &&
            props.editMode === false
        ) {
            input.blur();
            setTimeout(() => {
                props.enterEditMode(props.lastMessageIndex);
            }, 0);
        }
    };
    /**
     * Adds an emoji in the string of the input, at the curor's current position
     * Browser focus then returns to the text input and places the cursor after the
     * emoji
     */
    const onEmojiClick = (event, emojiObject) => {
        setDisplayEmojis(false);
        const cursorPosition = input.selectionStart;
        const selectionLength = input.selectionEnd - input.selectionStart;
        const textArray = input.value.split("");
        textArray.splice(cursorPosition, selectionLength, emojiObject.emoji);
        const newText = textArray.join("");
        props.setSavedMsg(newText);

        input.focus();
        input.selectionStart = input.selectionEnd = cursorPosition + 1;
    };

    return (
        <form
            className="message-form"
            onSubmit={handleSubmit}
            key={"MessageForm"}
        >
            <label htmlFor="message-input" className="sr-only">
                Message:
            </label>
            <div className={displayEmojis ? "emoji-picker" : "hidden"}>
                <Picker disableAutoFocus={true} onEmojiClick={onEmojiClick} />
            </div>
            <button
                type="button"
                className="open-emojis"
                onClick={handleDisplayPicker}
            >
                <FontAwesomeIcon icon={faSmile} />
            </button>
            <input
                id="message-input"
                type="text"
                ref={props.msgInput}
                className="message-input"
                placeholder="Type here..."
                autoComplete="off"
                onChange={handleChange}
                value={props.savedMsg || ""}
                onKeyDown={handleKeyPress}
            />
            <button type="submit" className="send-message">
                <span className="sr-only">send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default MsgForm;
