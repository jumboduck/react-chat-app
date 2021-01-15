import React from "react";

const MsgForm = () => {
    return (
        <form className="message-form">
            <input
                id="send-message"
                className="message-input"
                type="text"
                placeholder="Enter your message here"
                autoComplete="off"
            />
            <button>Send Message</button>
        </form>
    );
};

export default MsgForm;
