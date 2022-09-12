import React from 'react'
import recieve from "../../assets/image/repair.png"
import ArrowRight from '../svg-icon/ArrowRight'


export default function HeroRecieveCard() {
  return (
   <div className='inner-card-content'>
      <div>
         <img className='response' src={recieve}></img>
         <b>Browse</b>
         <p>
         Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
         </p>
            <span>
               <abbr>Learn more</abbr> <ArrowRight width="13" height="13"/>
            </span>
      </div>
   </div>
  )
}
