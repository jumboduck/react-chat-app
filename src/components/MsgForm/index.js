import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";
import Picker from "emoji-picker-react";

/**
 * This renders the form to send a new message.
 */
const MsgForm = (props) => {
    const input = useRef();

    /** This functions handles the submission of the new message form */
    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.current.value.length > 0) {
            props.addNewMessage(input.current.value);
            input.current.value = "";
        }
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

    /**
     * Adds an emoji in the string of the input, at the curor's current position
     * Browser focus then returns to the text input and places the cursor after the
     * emoji
     */
    const onEmojiClick = (event, emojiObject) => {
        setDisplayEmojis(!displayEmojis);

        const cursorPosition = input.current.selectionStart;
        const selectionLength =
            input.current.selectionEnd - input.current.selectionStart;
        const textArray = input.current.value.split("");
        textArray.splice(cursorPosition, selectionLength, emojiObject.emoji);
        const newText = textArray.join("");
        input.current.value = newText;
        input.current.focus();
        input.current.selectionStart = input.current.selectionEnd =
            cursorPosition + 1;
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
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
                ref={input}
                className="message-input"
                placeholder="Type here..."
                autoComplete="off"
            />
            <button type="submit" className="send-message">
                <span className="sr-only">send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default MsgForm;
