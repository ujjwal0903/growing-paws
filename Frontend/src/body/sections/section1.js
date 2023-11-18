import React from 'react';

export default function Section1(props) {
  return (
    <div className='col-sm-12 col-md-4 col-lg-4'>
      <div className='card text-light card-has-bg click-col '>
        {/* <img id='first' className='card-img d-none' /> */}
        <div id={props.num}  className='card-img-overlay d-flex flex-column'>
          <div className='card-body'>
            <h2 className='card-title mt-0'>{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
