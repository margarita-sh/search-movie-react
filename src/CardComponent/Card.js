import React, {useState} from 'react';

import './Card.css';
import CardDescription from '../CardDescriptionComponent/CardDescription';


function Card({videos}) {
    const [isOpenVideo, setOpenVideo]=useState(false);
    const [video, setVideo]=useState({});
    const openDescription = (video) =>{
        console.log('video', video);
        setOpenVideo(true);
        setVideo(video);
    };

    if(videos.items) {
        return (
            <div className="container">
                
           {  !isOpenVideo ? videos.items.map((video, i) =>
            <div className="card" key={'div_'+ i} onClick={()=>openDescription(video)} >
                <p key={'p_'+i}>{video.snippet.localized.title}</p>
                <img className="img" src={video.snippet.thumbnails.medium.url} key={i} alt=''/>
                </div>
          )
          : <CardDescription video={video}/>}
            </div>

      );
    }else{
        return <p>No videos</p>
    }
}


export default Card;