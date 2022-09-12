import React from 'react';
import Footer from '../footer/Footer';
import Topnav from '../navbar/topnav';

const HomeTemplate = ({children} : any) => {
  return (
    <div>
        <Topnav/>
        <section>
          {children}
        </section>
        <Footer/>
    </div>
  )
}

export default HomeTemplate