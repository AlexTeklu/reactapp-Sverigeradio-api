import React, { useState, useEffect } from 'react';
import './radioChannel.css';


 const RadioChannel = () => {
    const [channels, setChannels] = useState([]);

   const getChannels = async () => {
     const response = await fetch('https://api.sr.se/api/v2/channels?format=json');
     const data = await response.json();
     setChannels(data.channels);
//   console.log(data.channels);

     
}
useEffect(() => {
   getChannels();
},);


   

if(!channels.length) return<div>Loading be patient.....</div>
return(
    <section id='radio-channels'>
        <h3>React App using Swedish Radio Api</h3>
        <h1>Sverige Radio</h1>
        
        <div className="container channels-container">
            {
                channels.map((channel, index) => {
          return(
            <article key={channel.id} className="channels-item">
                <div className='channel_item-image'>
                    <img src={channel.image} alt="" /> 
                </div>  
                    <p className='channel-info'>{channel.tagline}</p> 
                    <audio className="player" controls> 
                    <source src={channel.liveaudio.url}></source></audio>
                

            </article>
          )
                  
               
            })
            }
</div>










    </section>
)

 }

export default RadioChannel
