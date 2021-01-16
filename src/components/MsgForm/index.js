import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const MsgForm = (props) => {
    const input = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.current.value.length > 0) {
            props.addNewMessage(props.currentConv, input.current.value);
            input.current.value = "";
        }
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                type="text"
                ref={input}
                className="message-input"
                placeholder="Type here..."
            />
            <button type="submit" className="send-message">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default MsgForm;
