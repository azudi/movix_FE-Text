import React from 'react'
import browse from "../../assets/image/browse.png"


export default function HeroBrowseCard() {
  return (
   <div className='inner-card-content'>
      <div>
         <img className='response' src={browse}></img>
         <b>Browse</b>
         <p>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
         </p>
      </div>
   </div>
  )
}
