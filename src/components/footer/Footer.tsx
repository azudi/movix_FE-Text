import React from 'react'
import AcerwareLogoSingle from '../svg-widget/AcerwareLogoSingle'
import AcerwareSingleLogo from '../../assets/image/aceware dynamic logo1-12.png'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="landing-container">
        <div className="nav-bar-container sub-footer-container">
          <div className="footer-image-container">
            <img className="footer-image" src={AcerwareSingleLogo}></img>
          </div>

          <div className="footer-text-container">
            <h6>Company</h6>
            <ul>
              <li>Office Location</li>
            </ul>
          </div>
          <div className="footer-text-container">
            <h6>Policies</h6>
            <ul>
              <li>User FAQs</li>
              <li>Contact Us</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="footer-text-container">
            <h6>Products</h6>
            <ul>
              <li>Buy</li>
              <li>Sell</li>
              <li>Repair</li>
            </ul>
          </div>
          <div className="footer-form-container">
            <h6>
              Subscribe to our newsletter and be the first to know about our
              updates
            </h6>
            <form>
                <div>
                    <input placeholder='Input email' type="email" required></input>
                </div>
                <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="landing-container border-t-[2px] border-white">
        <div className="nav-bar-container py-2 flex justify-end footer-social-container">
           <span >
             <FaFacebookF style={{fill:'white'}}/>
             </span>
            <span>
              <BsTwitter style={{fill:'white'}}/> 
            </span>
            <span>
              <BsInstagram style={{fill:'white'}}/>
            </span>
            </div>
        </div>
    </section>
  )
}
