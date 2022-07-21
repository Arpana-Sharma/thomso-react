import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './page1.css'

function Page1() {

  return (
    <div className = "flexbox">
      <div className="main">
        <h1 className="heading">INFRASTRUCTURE</h1>
        <h3 className="sub-heading">Surakshit Sadak Yojana</h3>
        <p className="para">In May 2016 the PM Surakshit Sadak Yojana earmarked Rs 2000 cr to eliminate the danger zones on
           highways that were death traps for vehicles; India had the highest number of road fatalities in
           the world, then estimated at more than 231,000 by the World Health Organization.
        </p>
        <p className="footer-para">
         The Prime Minister, Shri Narendra Modi flagging off the train between Maduadih and Patna, at
         Maduadih, in Varanasi, Uttar Pradesh on March 12, 2018.
        </p>
        <button>
          <NavLink exact to = "/page2">Next &#62;&#62;</NavLink>
          <p>Vande Bharat Express</p>
        </button>
        <img id="design" src={process.env.PUBLIC_URL+"Group87.png"} />
      </div>
      <img id ="image-1"  src={process.env.PUBLIC_URL+"image-1.png"} />
    </div>
  )
}

export default Page1
