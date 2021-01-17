import React, { useState } from "react";
import NewFriendForm from "../NewFriendForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const FriendList = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        const newConv = event.target.dataset.conv;
        props.setCurrentConv(newConv);
        setDisplayFriends(false);
    };

    const [displayFriends, setDisplayFriends] = useState(false);

    const handleDisplayFriends = (event) => {
        event.preventDefault();
        setDisplayFriends(!displayFriends);
    };

    let friendList = [];
    for (const [key, value] of Object.entries(props.data)) {
        friendList.push({ name: value.name, id: key });
    }

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
                {friendList.map((friend) => {
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
                <NewFriendForm addNewFriend={props.addNewFriend} />
            </div>
        </div>
    );
};

export default FriendList;
