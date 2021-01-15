import React from "react";

const FriendList = (props) => {
    return (
        <>
            <h2>Friend list</h2>

            {props.friends.map((friend) => (
                <button
                    className={
                        friend.id === props.currentConv
                            ? "friend-btn friend-selected"
                            : "friend-btn"
                    }
                    key={friend.id}
                >
                    {friend.name}
                </button>
            ))}
        </>
    );
};

export default FriendList;
