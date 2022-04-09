import React from 'react';
import 'animate.css';

export const GifGridItem = ( {url, title} ) => {
    
    return (
        <div  className='card animate__animated animate__zoomIn'>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
