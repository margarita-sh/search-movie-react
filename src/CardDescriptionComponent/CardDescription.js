import React from 'react';


function CardDescription({video}) {
    console.log('XX', video);
    return(
        <div className='CardDescription'>
            {video.snippet.localized.title}
        </div>
    );
}


export default CardDescription;