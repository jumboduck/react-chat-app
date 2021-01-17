import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const NewFriendForm = (props) => {
    const input = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.current.value.length > 0) {
            props.addNewFriend(input.current.value);
            input.current.value = "";
        }
    };

    return (
        <form className="message-form friend-form" onSubmit={handleSubmit}>
            <label htmlFor="new-friend" className="sr-only">
                Friend's Name
            </label>
            <input
                id="new-friend"
                type="text"
                ref={input}
                className="message-input"
                placeholder="Friend's name"
                autoComplete="off"
            />
            <button type="submit" className="send-message">
                <span className="sr-only">add a friend</span>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
        </form>
    );
};

export default NewFriendForm;
