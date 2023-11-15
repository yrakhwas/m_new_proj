import React from 'react';
import AuthorsInfo from './AuthorsInfo';
import SocialLinks from './SocialLinks';
import './Article.css';

function Article()
{
    return(
        <div class="container">
            <h1>Tom Sawyer and Huckleberry Finn</h1>
            <AuthorsInfo authorName = "Mark Twain"/>
                <p>Chapter about...</p>
            <SocialLinks/>
        </div>
    );
}

export default Article;