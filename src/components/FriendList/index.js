import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const FriendList = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        const newConv = event.target.dataset.conv;
        props.setCurrentConv(newConv);
        handleDisplayFriends();
    };

    const [displayFriends, setDisplayFriends] = useState(false);

    const handleDisplayFriends = () => {
        setDisplayFriends(!displayFriends);
    };

    return (
        <div className="friend-list">
            <h2 className="friends-title">
                <button
                    className="hamburger-icon"
                    onClick={handleDisplayFriends}
                >
                    <span className="sr-only">Display Friend List</span>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <FontAwesomeIcon icon={faUserFriends} /> friends
            </h2>
            <div
                className={
                    displayFriends
                        ? "friends-buttons"
                        : "friend-buttons hidden-mobile"
                }
            >
                {props.messages.map((friend) => {
                    return (
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
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FriendList;
