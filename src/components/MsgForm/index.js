import React from "react";

const MsgForm = (props) => {
    const newMessage = document.getElementById("new-message-input");
    const handleClick = (event) => {
        if (newMessage.value !== "") {
            props.addNewMessage(props.messages, newMessage.value);
            newMessage.value = "";
        }
        event.preventDefault();
    };

    return (
        <form className="message-form">
            <input type="text" id="new-message-input" />
            <button onClick={handleClick}>Send</button>
        </form>
    );
};

export default MsgForm;
