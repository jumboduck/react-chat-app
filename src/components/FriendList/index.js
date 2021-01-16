import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const FriendList = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        const newConv = event.target.dataset.conv;
        props.setCurrentConv(newConv);
    };
    return (
        <div className="friend-list">
            <h2 className="friends-title">
                <FontAwesomeIcon icon={faUserFriends} /> friends
            </h2>

            {props.friends.map((friend) => {
                <button
                    className={
                        friend.id === props.currentConv
                            ? "friend-btn friend-selected"
                            : "friend-btn"
                    }
                    key={friend.id}
                    data-conv={friend.id}
                    onClick={handleClick}
                >
                    {friend.name}
                </button>;
            })}
        </div>
    );
};

export default FriendList;
