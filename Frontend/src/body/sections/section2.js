/* ------FEATURED BREED SECTION-------------*/

import React from 'react';
export default function Section2(props) {
  return (
    
    <div style={{zIndex:'1',marginTop:'30px'}}>
        
      <div class='card' style={{ width:'155px' }}>
        <img class='card-img-top' style={{height:'155px',margin:'5px'}} src={props.img} alt='Card image' />
        <div class='card-body'>
            <h4 className='card-title'>{props.title}</h4>
          <p class='card-text'>
            {props.para}
          </p>
          <a href='#' class='btn btn-primary'>
            Explore
          </a>
        </div>
      </div>
    </div>
    
  );
}
