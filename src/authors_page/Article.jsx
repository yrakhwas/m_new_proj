import React, { useState } from 'react';
import AuthorsInfo from './AuthorsInfo';
import SocialLinks from './SocialLinks';
import './Article.css';

function Article()
{
    const [rating, setRating] = useState(0);
    const [likes, setLikes] = useState(0);
    
    const handleLike = () =>
    {
        setLikes(likes+1);
    }

    const handleDisLike = () =>
    {
        setLikes(likes -1);
    }

    const handleRate = (newRating) =>
    {
        setRating(newRating);
    }

    return(
        <div class="container">
            <h1>Tom Sawyer and Huckleberry Finn</h1>
            <div>
                <p>Rating: {rating}</p>
                <button onClick={()=> handleRate(rating+1)}>Rate Up</button>
                <button onClick={()=>handleRate(rating-1)}>Rate Down</button>
            </div>
            <div>
                <p>Likes : {likes}</p>
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDisLike}>Dislikes</button>
            </div>
            <AuthorsInfo authorName = "Mark Twain"/>
                <p>Chapter about...</p>
            <SocialLinks/>
        </div>
    );
}

export default Article;