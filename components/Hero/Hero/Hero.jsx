import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter"> 

        <div className="flexColStart hero-left">
          <div className='hero-title'>
          <div className="orange-circle"/>
          
          <motion.h1
          initial={{y: "2rem", opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          >
            Discover <br/> 
            Suitable Property 
          </motion.h1>
           </div>

           <div className="flexColStart hero-des">
            <span className='secondaryText'>Choose from a variety of properties that suits you the best</span>
           <span className='secondaryText'>Finding difficulties in searching properties? Worry Not We Got You!</span>
           </div>

           <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className='button'>Search</button>
           </div>

<div className="flexCenter stats">

  <div className="flexColCenter stat">
<span>
  <CountUp start={88000} end={9000} duration={4}/>
<span>+</span></span>
<span className="secondaryText">Premium Products</span>
  </div>

  <div className="flexColCenter stat">
  <span>
  <CountUp start={2000} end={5000} duration={4}/>
<span>+</span></span>
<span className="secondaryText">Happy Customers</span>
</div>

<div className="flexColCenter stat">
<span>
  <CountUp end={20}/>
<span>+</span></span>
<span className="secondaryText">Accolades Received</span>

</div>

</div>

        </div>

        <div className="flexCenter hero-right">
        <motion.div 
        initial={{x: "7rem", opacity:0}}
        animate={{x: 0, opacity: 1}}
        transition={{
          duration:2,
          transition: "spring",
        }}
        className="image-container">
            <img src="./hero-image.png" alt=""/>

        </motion.div>
        </div>
        </div>
        </section>
    )
}

export default Hero