import React from 'react';
import laptopImage from "../../assets/image/product-laptop.png";
import phoneImage from "../../assets/image/phone-content.png"

export default function ProductItem() {
  return (
    <div className='mx-6 my-4 product-content-container'>
       <div className='bg-acearwaregray-100 rounded-lg w-auto p-2'>
           <div className='bg-acearwaregray-150 rounded-lg w-auto'>
              <img className='w-[80%] mx-[10%]' src={phoneImage}></img>
           </div>
           {/* START: raio button container */}
           <div className='px-1 flex my-2 items-center'>
               <span className='mr-2'><input type="radio" name="pick" className='radio-input'></input></span>
               <span><input type="radio" name="pick" className='radio-input radio-input-inactive'></input></span>
           </div>
           {/* END: radio button container */}
           <span className='text-[13px] py-1 block px-1 truncate'>Apple - iPhone 13 Pro M...</span>
           <span className='block text-[13px] font-extrabold text-acearware-500 relative mb-2 px-1'># 1,023,000.
           <sub className='ml-[2px] mb-1 absolute bottom-[4px]'>00</sub>
           </span>
       </div> 
    </div>
  )
}
