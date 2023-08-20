import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            

            <div className='flexColStart f-left'>
              <img src="./logo2.png" alt="" width={120}/>

              <span className='secondaryText'>
                Our Vision is to make people <br/>
                 get there dream homes
              </span>
            </div>

            <div className='flexColStart f-right'>
              <span className='primaryText'>Information</span>
              <span className='secondaryText'>Andheri East Mumbai, 400068</span>

              <div className='flexCenter f-menu'>
                <span>Properties</span>
                <span>Services</span>
                <span>Contact</span>  
                <span>About Us</span>  
                  </div>
            </div>
        </div>
    </section>
 );
};

export default Footer