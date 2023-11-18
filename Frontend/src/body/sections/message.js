import React from 'react';
//  import {meassage} from '../sections/'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { messagecss } from '../../cssfiles/message.css';
import { video } from '../videos/video';
export default function Meassage() {
  return (
    <div className="content" >
      <div className="container content-container">
        <div className="card text-center m-5">
      <video src={video} autoPlay loop muted id="video-background"></video>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className="card-title">Connect & Meet Pets on Growing Paws</h5>
            <p className="card-text m-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
              laudantium vero voluptatum explicabo ipsam porro maxime odio cumque, fugiat
              earum delectus soluta, quam nobis aut voluptates minus distinctio obcaecati iure
              ipsa hic quaerat non. Quasi laboriosam quae et sunt impedit expedita nihil
              deleniti iusto neque! Aspernatur repudiandae fugit vitae asperiores?
            </p>
            <a href="#" className="btn btn-dark btn-lg">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
