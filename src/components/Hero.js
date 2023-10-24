import React from 'react';
import "../styles/Hero.css";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
        <div className="wrapper">
        <div className="text-content">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-easing="ease-in-out">nationwide logistic services</h1>
            {/* <p>We help you with deliveries to your customers anywhere in the country.</p> */}
            <pre data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-easing="ease-in-out">Fast &bull; Safe &bull; Reliable</pre>
            <div className="btns">
                <button onClick={() => navigate('/register')} data-aos="slide-left" data-aos-easing="ease-in-out">create an account</button>
                <button onClick={() => navigate('/login')} data-aos="slide-right" data-aos-easing="ease-in-out">sign in</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
