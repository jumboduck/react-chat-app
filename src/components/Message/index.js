import React from "react";

const Message = (props) => {
    const handleClick = () => props.enterEditMode(props.index);

    return (
        <>
            <button className="message" onClick={handleClick}>
                {props.message.message}
            </button>
            <p className="msg-date">
                {props.message.edit
                    ? "edited on " + props.message.edit
                    : props.message.time}
            </p>
        </>
    );
};

export default Message;
