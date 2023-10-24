import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem('email');
    const navigate = useNavigate();
    useEffect(() => {
        if(token && email !== "genki@gmail.com"){
            navigate('/user-dashboard')
        }
        else if(token && email === "genki@gmail.com"){
            navigate('/admin-dashboard')
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])
  return (
    <div>
       <Nav />
       <Hero />
       <Services />
       <Banner />
    </div>
  )
}

export default Home;
