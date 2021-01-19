import React from "react";

const Message = (props) => {
    return (
        <>
            <p className="message">{props.message.message}</p>
            <p className="msg-date">{props.message.time}</p>
        </>
    );
};

export default Message;
