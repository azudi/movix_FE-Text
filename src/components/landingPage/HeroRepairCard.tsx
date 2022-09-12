import React from 'react'
import recieve from "../../assets/image/recieve.png"


export default function HeroRepairCard() {
  return (
   <div className='inner-card-content'>
      <div>
         <img className='response' src={recieve}></img>
         <b>Receive</b>
         <p>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
         </p>
      </div>
   </div>
  )
}
