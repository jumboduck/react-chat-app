import React from "react";

const FriendList = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        const button = event.target.dataset.conv;
        props.setCurrentConv(button);
    };
    return (
        <div className="friend-list">
            <h2>Friend list</h2>

            {props.friends.map((friend) => (
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
            ))}
        </div>
    );
};

export default FriendList;
