import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './page1.css'

function Page2() {
  return (
    <div className = "flexbox">
      <div className="main">
        <h1 className="heading">INFRASTRUCTURE</h1>
        <h3 className="sub-heading">Vande Bharat Express</h3>
        <p className="para">
        Railways, long-neglected, went through a similar makeover, with some remarkable indigenisation. 
        The Vande Bharat Express, India’s first high-tech, energy-efficient train, designed and built in
        18 months by Integral Coach Factory at Chennai fulfilled the task set by  Narendra Modi’s 
        signature “Make in India” initiative, at a cost estimated to be 40% cheaper than the equivalent 
        built in Europe. It was flagged off by the Prime Minister at the New Delhi railway station on 15
        February 2019. The semi-high speed Tejas Express between Mumbai and Karmali in Goa started in
         May 2017, covered 551.7 km in 8 hours and 30 minutes.ays
        </p>
        <p className="footer-para">
         The Prime Minister, Shri Narendra Modi flagging off the train between Maduadih and Patna, at
         Maduadih, in Varanasi, Uttar Pradesh on March 12, 2018.
        </p>
        <div className = "flexbox">
          <button><NavLink exact to = "/">&#60;&#60; Previous</NavLink>
          <p>Surakshit Sadak Yojana</p>
          </button>
          <button><NavLink exact to = "/page3">Next &#62;&#62;</NavLink>
          <p>Bullet Train</p>
          </button>       
        </div>
        <img id="design" src={process.env.PUBLIC_URL+"Group87.png"} />
      </div>
      <img id ="image-1"  src={process.env.PUBLIC_URL+"image-2.png"} />
    </div>
  )
}

export default Page2
