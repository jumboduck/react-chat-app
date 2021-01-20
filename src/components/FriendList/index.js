import React, { useState } from "react";
import NewFriendForm from "../NewFriendForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders the friend list
 */
const FriendList = (props) => {
    /**
     * Switches conversation when a friend button is clicked
     * @param {onClick} event
     */
    const handleClick = (event) => {
        event.preventDefault();
        props.updateSaved(props.savedMsg);
        const newConv = event.target.dataset.conv;
        props.setCurrentConv(newConv);
        props.setSavedMsg(props.data[newConv].saved);
        props.setEditMode(false);
        setDisplayFriends(false);
    };

    /**
     * This state is used for small screen sizes only, allows to display or hide
     * the friend list
     */
    const [displayFriends, setDisplayFriends] = useState(false);

    /**
     * Displays and hides the friend list
     * @param {onClick} event
     */
    const handleDisplayFriends = (event) => {
        event.preventDefault();
        setDisplayFriends(!displayFriends);
    };

    /**
     * friendList is an array containing the friend names and their id
     */
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
