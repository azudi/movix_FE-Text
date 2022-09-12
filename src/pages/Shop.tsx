import React from 'react'
import HomeTemplate from '../components/HomeLayout/HomeTemplate'
import shopHeroImage from "../assets/image/shop-hero-image.png"
import Typewriter from 'typewriter-effect';
import ProductItem from '../components/products/productItem';
import ArrowRight from '../components/svg-icon/ArrowRight';

export default function Shop() {
  return (
    <HomeTemplate>
         <main>
         <section className='hero-content'>
              <div className='landing-container'>
                  <div className='nav-bar-container gap-top'>

                   <div className='hero-content-container'>
                    
                      <h1 className='hero-shop-header' style={{lineHeight:'33px'}}>
                      Discover the <abbr className='text-acearwaregray-200'>gorgeous</abbr> new
                      <span className='flex'> 
                         <abbr className='mr-2' >green on the </abbr> <Typewriter
                                    options={{
                                      strings: ['iphone 13', 'iphone 12', 'iphone 11', 'iphone 10'],
                                      autoStart: true,
                                      loop: true,
                                    }}
                                  /></span> series
                      </h1>
                      <p className="hero-content-text">New sophisticated alpine green iPhone
                        13 Pro and green iPhone 13, featuring the lightning-fast A15 Bionic, advanced camera 
                        systems, great battery life, 5G and impressive durability
                        </p>
                        <div className='hero-content-button'>
                          {/* <button className='outline-button'>SHOP NOW</button> */}
                          <button className='fill-button shop-fill-button'>SERVICES</button>
                        </div>
                    </div>

                   <div  className='hero-content-container image-text-container'>
                      <img className='w-[80%] ml-[10%]' src={shopHeroImage}/>
                   </div>
                  </div>
              </div>
          </section>


          <section  className='product-container'>
                  <div className='landing-container'>
                   <div className='nav-bar-container'>
                       <h2 className='text-center w-full product-title mb-6'>Popular Products</h2>
                       <div className='w-full flex flex-wrap'>
                          {
                            [1,2,3,4,5,5,6,7,8,9,10].map((product, index)=>{
                               return <div className='w-6/12 sm:w-4/12 md:w-3/12 xl:w-[20%]'>
                                <ProductItem/>
                                </div>
                            })
                          }
                       </div>
                       <div className='flex justify-center w-full mb-4'>
                        <button className='inline-flex justify-center items-center poppins text-[14px] border-[2px] border-gray-100 rounded-lg py-2 px-3'> 
                        <abbr className='mr-4'>Load more</abbr>
                        <ArrowRight width='13' height='13'/></button>
                       </div>
                    </div>
                  </div>
          </section>


          <section  className='product-container'>
                  <div className='landing-container'>
                   <div className='nav-bar-container'>
                       <h2 className='text-center w-full product-title mb-6'>Similar Products</h2>
                       <div className='w-full flex flex-wrap'>
                          {
                            [1,2,3,4,5,5,6].map((product, index)=>{
                               return <div className='w-6/12 sm:w-4/12 md:w-3/12 xl:w-[20%]'>
                                <ProductItem/>
                                </div>
                            })
                          }
                       </div>
                       
                    </div>
                  </div>
          </section>
         </main>
    </HomeTemplate>
  )
}
