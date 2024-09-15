import React from 'react';
import { ThumbUp, ThumbDown, Chat, Share } from '@mui/icons-material';
import './FeedItem.css'; // Ensure you have styles for the new buttons

const FeedItem = ({ image, likes, dislikes, onLike, onDislike, onMessage, onShare }) => {
    return (
        <div className="feed-item">
            <img src={image} alt="Feed" className="feed-item-image" />
            <div className="feed-item-buttons">
                <button onClick={onLike} className="custom-button primary">
                    <ThumbUp className="button-icon" />
                    {likes}
                </button>
                <button onClick={onDislike} className="custom-button primary">
                    <ThumbDown className="button-icon" />
                    {dislikes}
                </button>
                <button onClick={onMessage} className="custom-button primary">
                    <Chat className="button-icon" />
                   
                </button>
                <button onClick={onShare} className="custom-button primary">
                    <Share className="button-icon" />
                    
                </button>
            </div>
        </div>
    );
};

export default FeedItem;
