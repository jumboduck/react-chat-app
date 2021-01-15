import React, { useRef } from "react";

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
            <input type="text" ref={input} className="message-input" />
            <button type="submit" className="send-message">
                Send
            </button>
        </form>
    );
};

export default MsgForm;
