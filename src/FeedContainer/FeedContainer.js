import React, { useState } from 'react';
import FeedItem from './FeedItem'; 

const FeedContainer = () => {
    const [feedItems, setFeedItems] = useState([
        { id: 1, image: 'https://via.placeholder.com/150', likes: 10, dislikes: 2 },
        { id: 2, image: 'https://via.placeholder.com/150', likes: 5, dislikes: 1 },
        { id: 3, image: 'https://via.placeholder.com/150', likes: 5, dislikes: 1 },
        { id: 4, image: 'https://via.placeholder.com/150', likes: 5, dislikes: 1 },
        { id: 5, image: 'https://via.placeholder.com/150', likes: 5, dislikes: 1 },
    ]);

    const handleLike = (id) => {
        setFeedItems(feedItems.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item));
    };

    const handleDislike = (id) => {
        setFeedItems(feedItems.map(item => item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item));
    };

    const handleMessage = (id) => {
        // Handle message logic
        alert(`Message button clicked for item ${id}`);
    };

    const handleShare = (id) => {
        // Handle share logic
        alert(`Share button clicked for item ${id}`);
    };

    return (
        <div>
            {feedItems.map(item => (
                <FeedItem
                    key={item.id}
                    image={item.image}
                    likes={item.likes}
                    dislikes={item.dislikes}
                    onLike={() => handleLike(item.id)}
                    onDislike={() => handleDislike(item.id)}
                    onMessage={() => handleMessage(item.id)}
                    onShare={() => handleShare(item.id)}
                />
            ))}
        </div>
    );
};

export default FeedContainer;
