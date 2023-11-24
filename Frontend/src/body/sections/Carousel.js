import React from 'react';
import Reactdom from 'react-dom';
import { i1, i2, i3 } from '../images';

// import { CarouselStyle } from '../cssfiles/Carousel.css';

export default function Carousel() {
  return (
    <>
      <div
        id='carouselExampleInterval'
        class='carousel slide'
        data-bs-ride='carousel'>
        <div class='carousel-inner' style={{ height: '37rem' }}>
          <div class='carousel-item active' data-bs-interval='3000'>
            <img src={i1} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item' data-bs-interval='3000'>
            <img src={i2} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item' data-bs-interval='3000'>
            <img src={i3} class='d-block w-100' alt='...' />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='prev'>
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='next'>
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}
