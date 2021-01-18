import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <label htmlFor="message-input" className="sr-only">
                Message:
            </label>
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
