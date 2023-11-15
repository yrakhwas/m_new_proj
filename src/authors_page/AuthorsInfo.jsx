import React from "react";

function AuthorsInfo({authorName})
{
    return(
        <div> 
            <h2>Author : {authorName}</h2>
            <p>Info about author...</p>
        </div>
    );
}

export default AuthorsInfo;