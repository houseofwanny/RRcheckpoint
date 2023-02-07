import React from 'react';
import {useParams} from 'react-router-dom'
import YouTube, {YouTubeProps} from 'react-youtube';
  
const Details = ({movies}) => {
    const {id} = useParams();
     const movie =movies.find((movie) => movie.id === +id);

     const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
    return (
        <div>
            <h2 style={{color:"white"}} >{movie.title}</h2>
            <h2 style={{color:"white"}} >{movie.description}</h2>
            <h2>Trailer</h2>
            <div>
                <YouTube videoId={movie.trailerId} opts={opts} onReady={onPlayerReady}  />
            </div>
        </div>
    )
}
export default Details 
    
    
/*.filter((elt) => elt.id ==useParams);
    return (
        <div>
            {movie.description}
        </div>
    )
}

export default Details 
*/