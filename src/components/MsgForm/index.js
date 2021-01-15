import React from "react";

const MsgForm = (props) => {
    const input = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.current.value.length > 0) {
            props.addNewMessage(props.currentConv, input.current.value);
            input.current.value = "";
        }
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input type="text" ref={input} />
            <button type="submit">Send</button>
        </form>
    );
};

export default MsgForm;
