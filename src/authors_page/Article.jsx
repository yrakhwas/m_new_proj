import React from 'react';
import AuthorsInfo from './AuthorsInfo';
import SocialLinks from './SocialLinks';

function Article()
{
    return(
        <div>
            <h1>Header of title</h1>
            <AuthorsInfo authorName = "Mark Twen"/>
            <p>Content here.....</p>
            <SocialLinks/>
        </div>
    );
}

export default Article;