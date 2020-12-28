import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';

function Post({ profilePic, message, image, timestamp, username }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                    <div className="post__topInfo">
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>               
            </div>
            <div className="post__image">
                <img src={image} alt=""/>            
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <PlayForWorkOutlinedIcon />
                    <p>Share</p>
                </div>
            </div>

        </div>
    )
}

export default Post;