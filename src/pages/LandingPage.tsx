import React, { useState } from 'react'
import HomeTemplate from '../components/HomeLayout/HomeTemplate'
import heroImage from "../assets/image/hero-laptop.png";
import HeroRepairCard from '../components/landingPage/HeroRepairCard';
import HeroBrowseCard from '../components/landingPage/HeroBrowseCard';
import HeroRecieveCard from '../components/landingPage/HeroRecieveCard';
import ArrowTopCircle from '../components/svg-icon/ArrowTopCircle';
import Typewriter from 'typewriter-effect';



function LandingPage() {

  const [data,setdata] = useState<{name:string}>(
    {name:'jerry'}
  )   

  //function
  const scrollToTop =()=>{
    let body = document.querySelector('body') as HTMLElement
    body.scrollIntoView({behavior: "smooth", block: "start"}) 
  }

  return (
  <HomeTemplate>
      <main className=''>
          <section className='hero-content'>
              <div className='landing-container'>
                  <div className='nav-bar-container gap-top background-overlay'>

                   <div className='hero-content-container'>
                    
                      <h1 className='hero-content-header uppercase'>
                       SIMPLE SOLUTION FOR<br></br>
                      <span className='flex'> 
                         <abbr className='mr-2' >COMPLEX </abbr> <Typewriter
                                    options={{
                                      strings: ['CONNECTIONS', 'maintenance', 'repairs', 'services'],
                                      autoStart: true,
                                      loop: true,
                                    }}
                                  /></span>
                      </h1>
                      <p className="hero-content-text">Aceware Dynamic Tech offers wholesales and retail sales of 
                        smartphones and accessories with swift delivery, as well as 
                        maintenance, repairs and services.
                        </p>
                        <div className='hero-content-button'>
                          <button className='outline-button'>SHOP NOW</button>
                          <button className='fill-button'>SERVICES</button>
                        </div>
                    </div>

                   <div  className='hero-content-container image-text-container'>
                      <img className='hero-image' src={heroImage}/>
                   </div>
                  </div>
              </div>
          </section>


          <section>
              <div className='landing-container'>
                <div className='nav-bar-container center-content vertical-space'>
                  {/* START: card content */}
                   <div className='mid-content'>
                      <div className='no-card-content'>
                        <h1>What we do to help our customers </h1>
                      </div>
                      <div className='card-content'>
                        <HeroRepairCard/>
                      </div>
                    </div>
                    {/* END: card content */}

                    {/* START: card content */}
                    <div className='mid-content'>
                        <div className='card-content'>
                        <HeroBrowseCard/>
                        </div>
                        <div className='card-content'>
                          <HeroRecieveCard/>
                        </div>
                      </div>
                    {/* END: card content */}
                </div>
              </div>
          </section>


                  <div className='w-full flex justify-center py-2'>
                    <button onClick={scrollToTop} className='top-button'>
                       <abbr className='mr-3'>Back to top</abbr>
                       <ArrowTopCircle width="38" height="44"/>
                       </button>
                    </div>
      </main>
  </HomeTemplate>
  )
}

export default LandingPage