import React, { useState } from 'react';
import Card  from './CardComponent/Card';

import './App.css';

function App() {
  const [searchName, setSearchName] = useState('');
  const [videos, setVideos] = useState({});

  async function test(searchValue){
    const keyYoutube = 'AIzaSyCQxy58EJ-LrwU4_j8jOK7nB25tSWURxR0';
    if (searchValue.key !== 'Enter') {
      return;
    }
    const urlGetId = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue.target.value}&key=${keyYoutube}`;

    const getId = await fetch(urlGetId).then(response => response.json());

    const arrId = getId.items.map((item) => item.id.videoId);
 
    const urlGetVideos = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${arrId.join(',')}&key=${keyYoutube}`;
    setVideos(await (await fetch(urlGetVideos)).json());

  }

  function changeValue(value) {
    setSearchName(value);
  }

  
  return (
    <div className="App">
    <input type="text" 
          className="app-input"
          onKeyUp={e=>test(e)} 
          value={searchName} 
          onChange={e=>changeValue(e.target.value)}/>
          <div className='AppContainer'>
          <Card videos={videos}/>
          </div>
    </div>
  );
}

export default App;
