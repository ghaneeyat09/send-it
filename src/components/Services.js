import React from 'react'
import '../styles/Services.css'
const Services = () => {
  return (
    <div className="services">
         <div className="service-wrapper">
            <h1>our process</h1>
            <div className="service-cont">
                <div>
                    <h2>you call us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat congue elit, at maximus purus luctus quis. Nulla convallis sit amet dui sed placerat. Proin quis blandit lacus, in tristique odio</p>
                </div>
                <div className="img-cont" >
                    <img src="/images/delivery13.jpg" alt="img" />
                </div>
            </div>
            <div className="service-cont">
                <div>
                    <h2>we pick up</h2>
                    <p>Sed aliquet vestibulum ante. Integer ultricies erat ut mi facilisis pulvinar. Nulla vestibulum bibendum dolor, nec fermentum tellus laoreet eujetlop naertcderyun.</p>
                </div>
                <div className="img-cont" >
                    <img src="/images/delivery14.jpg" alt="img" />
                </div>
            </div>
            <div className="service-cont">
                <div>
                    <h2>we deliver</h2>
                    <p>In hac habitasse platea dictumst. Aenean vitae velit dapibus, dapibus turpis sit amet, rhoncus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="img-cont" >
                    <img src="/images/delivery15.jpg" alt="img" />
                </div>
            </div>
            <div className="service-cont">
                <div>
                    <h2>we put a smile on your face</h2>
                    <p>In hac habitasse platea dictumst. Aenean vitae velit dapibus, dapibus turpis sit amet, rhoncus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="img-cont" >
                    <img src="/images/delivery8.jpg" alt="img" />
                </div>
            </div>
         </div>
    </div>
  )
}

export default Services
